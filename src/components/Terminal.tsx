"use client";

import { useState, useRef, useEffect } from "react";

interface TerminalLine {
  type: "input" | "output";
  text: string;
}

const commands: Record<string, string | string[]> = {
  help: [
    "Available commands:",
    "  whoami       - Who am I?",
    "  about        - About me",
    "  skills       - My tech stack",
    "  ls projects  - List projects",
    "  contact      - How to reach me",
    "  uptime       - How long in IT",
    "  neofetch     - System info",
    "  sudo hire me - Try it ;)",
    "  clear        - Clear terminal",
    "  exit         - Close terminal",
  ].join("\n"),
  whoami: "maciej",
  about: [
    "IT Support Engineer with 3+ years of experience.",
    "Sole IT for a 200-person office. Homelab enthusiast.",
    "Self-hosting everything, building tools, breaking things.",
  ].join("\n"),
  skills: [
    "Windows  macOS  Linux  Intune  Jamf Pro  Okta",
    "Active Directory  ServiceNow  Docker  Proxmox",
    "Bash  Fish  Python  Networking  VPN  DNS  DHCP",
  ].join("\n"),
  "ls projects": [
    "drwxr-xr-x  hiremate/        - AI job search assistant (local LLM)",
    "drwxr-xr-x  homelab/         - 17+ containers on Proxmox",
    "drwxr-xr-x  portfolio/       - This website",
  ].join("\n"),
  contact: [
    "Email:    bledowskimaciej@gmail.com",
    "LinkedIn: linkedin.com/in/maciejbledowski",
    "GitHub:   github.com/PlagueBoomer",
    "Web:      maciejbledowski.pl",
  ].join("\n"),
  uptime: "Portfolio online since 2025. In IT since 2021.",
  neofetch: [
    "        .--.          maciej@portfolio",
    "       |o_o |         ─────────────────",
    "       |:_/ |         OS: EndeavourOS",
    "      //   \\ \\        WM: Sway",
    "     (|     | )       Shell: fish",
    "    /'\\_   _/`\\       Editor: VS Code",
    "    \\___)=(___/       Server: Proxmox VE",
    "                      Containers: 17+ LXC",
    "                      Services: 25+",
    "                      DNS: AdGuard Home",
    "                      Backup: PBS (weekly, automated)",
    "                      Uptime: 99.9%",
  ].join("\n"),
  "sudo hire me": [
    "✓ Permission granted.",
    "",
    "  Email:    bledowskimaciej@gmail.com",
    "  LinkedIn: linkedin.com/in/maciejbledowski",
    "  Location: Warsaw, Poland (remote-friendly)",
    "",
    "  Looking forward to hearing from you!",
  ].join("\n"),
  pwd: "/home/maciej/portfolio",
  hostname: "maciejbledowski.pl",
  ls: "projects/  skills/  cv.txt  .config/  homelab/",
  "cat /etc/os-release": 'NAME="EndeavourOS"\nSHELL="fish"\nWM="Sway"\nEDITOR="VS Code"\nSERVER="Proxmox VE"',
};

export default function Terminal({ onClose }: { onClose: () => void }) {
  const [lines, setLines] = useState<TerminalLine[]>([
    { type: "output", text: 'Welcome to maciej@portfolio\nType "help" for available commands.' },
  ]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [lines]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const newLines: TerminalLine[] = [
      ...lines,
      { type: "input", text: cmd },
    ];

    if (trimmed === "clear") {
      setLines([]);
      setInput("");
      return;
    }

    if (trimmed === "exit") {
      onClose();
      return;
    }

    const response = commands[trimmed];
    if (response) {
      newLines.push({ type: "output", text: typeof response === "string" ? response : response.join("\n") });
    } else if (trimmed === "") {
      // empty command, just add prompt
    } else {
      newLines.push({ type: "output", text: `fish: Unknown command "${trimmed}". Type "help" for available commands.` });
    }

    setLines(newLines);
    setInput("");
    setHistory((prev) => [...prev, cmd]);
    setHistoryIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleCommand(input);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length > 0) {
        const newIndex = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(history[newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= history.length) {
          setHistoryIndex(-1);
          setInput("");
        } else {
          setHistoryIndex(newIndex);
          setInput(history[newIndex]);
        }
      }
    } else if (e.key === "Escape") {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={onClose}>
      <div
        className="w-full max-w-2xl bg-[#1a1a2e] border border-[#333] rounded-xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-[#111] border-b border-[#333]">
          <div className="flex gap-1.5">
            <button onClick={onClose} className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-xs text-gray-400 ml-2 font-mono">maciej@portfolio ~ fish</span>
        </div>

        {/* Terminal content */}
        <div
          ref={containerRef}
          className="p-4 h-[400px] overflow-y-auto font-mono text-sm"
          onClick={() => inputRef.current?.focus()}
        >
          {lines.map((line, i) => (
            <div key={i} className="mb-1">
              {line.type === "input" ? (
                <div>
                  <span className="text-green-400">maciej</span>
                  <span className="text-gray-400">@</span>
                  <span className="text-cyan-400">portfolio</span>
                  <span className="text-gray-400"> </span>
                  <span className="text-blue-400">~</span>
                  <span className="text-gray-400">&gt; </span>
                  <span className="text-gray-200">{line.text}</span>
                </div>
              ) : (
                <pre className="text-gray-300 whitespace-pre-wrap">{line.text}</pre>
              )}
            </div>
          ))}

          {/* Current input */}
          <div className="flex items-center">
            <span className="text-green-400">maciej</span>
            <span className="text-gray-400">@</span>
            <span className="text-cyan-400">portfolio</span>
            <span className="text-gray-400"> </span>
            <span className="text-blue-400">~</span>
            <span className="text-gray-400">&gt; </span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent text-gray-200 outline-none caret-green-400 font-mono text-sm"
              autoComplete="off"
              spellCheck={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
