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
    "  ls projects  - List projects",
    "  ls skills    - List skills",
    "  cat cv.txt   - Quick CV summary",
    "  uptime       - How long in IT",
    "  neofetch     - System info",
    "  sudo hire me - Try it ;)",
    "  clear        - Clear terminal",
    "  exit         - Close terminal",
  ].join("\n"),
  whoami: "Maciej Błędowski — IT Support Engineer, Homelab Enthusiast, Builder of HireMate",
  "ls projects": [
    "drwxr-xr-x  hiremate/        - AI-powered job search assistant",
    "drwxr-xr-x  homelab/         - 17+ LXC containers on Proxmox",
    "drwxr-xr-x  portfolio/       - This website (Next.js + Tailwind)",
  ].join("\n"),
  "ls skills": [
    "Windows  macOS  Linux  Intune  Jamf Pro  Okta",
    "Active Directory  ServiceNow  Docker  Proxmox",
    "Bash  Python  Networking  VPN  DNS  DHCP",
  ].join("\n"),
  "cat cv.txt": [
    "┌─────────────────────────────────────────────┐",
    "│  Maciej Błędowski                           │",
    "│  IT | Help Desk | System Administration     │",
    "│                                             │",
    "│  3+ years in IT support                     │",
    "│  Sole IT engineer for 200-person office     │",
    "│  MDM: Intune, Jamf Pro                      │",
    "│  Identity: Active Directory, Okta, AWS      │",
    "│  Homelab: Proxmox, 17+ containers           │",
    "│                                             │",
    "│  Contact: bledowskimaciej@gmail.com         │",
    "└─────────────────────────────────────────────┘",
  ].join("\n"),
  uptime: "up 3 years, 6 months (since Oct 2021)",
  neofetch: [
    "        .-/+oossssoo+/-.        maciej@maciejbledowski.pl",
    "    `:+ssssssssssssssssss+:`    ─────────────────────────",
    "  -+ssssssssssssssssssyyssss+-  OS: Proxmox VE 8.x",
    " .osssssssssssssssssssdMMMNy..  Host: Intel NUC",
    " +ssssssssssssssssssshdmmNNm..  Containers: 17+ LXC",
    "                                Services: 25+",
    "  ████████████████████████████  Shell: bash + zsh",
    "  ████████████████████████████  DNS: AdGuard Home",
    "                                Backup: PBS (weekly)",
    "                                Uptime: 99.9%",
  ].join("\n"),
  "sudo hire me": [
    "✓ Permission granted.",
    "",
    "  Contact: bledowskimaciej@gmail.com",
    "  LinkedIn: linkedin.com/in/maciejbledowski",
    "  Location: Warsaw, Poland (remote-friendly)",
    "",
    "  Looking forward to hearing from you!",
  ].join("\n"),
  pwd: "/home/maciej/portfolio",
  date: new Date().toUTCString(),
  hostname: "maciejbledowski.pl",
  "cat /etc/os-release": 'NAME="Portfolio OS"\nVERSION="1.0"\nBUILT_WITH="Next.js, TypeScript, Tailwind CSS"\nHOSTED_ON="Vercel"',
  ls: "projects/  skills/  cv.txt  .config/  homelab/",
};

export default function Terminal({ onClose }: { onClose: () => void }) {
  const [lines, setLines] = useState<TerminalLine[]>([
    { type: "output", text: 'Welcome to maciej@portfolio ~ Type "help" for available commands.' },
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
      newLines.push({ type: "output", text: `bash: ${trimmed}: command not found. Type "help" for available commands.` });
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
          <span className="text-xs text-gray-400 ml-2 font-mono">maciej@portfolio:~</span>
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
                  <span className="text-green-400">maciej@portfolio</span>
                  <span className="text-gray-400">:</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-gray-400">$ </span>
                  <span className="text-gray-200">{line.text}</span>
                </div>
              ) : (
                <pre className="text-gray-300 whitespace-pre-wrap">{line.text}</pre>
              )}
            </div>
          ))}

          {/* Current input */}
          <div className="flex items-center">
            <span className="text-green-400">maciej@portfolio</span>
            <span className="text-gray-400">:</span>
            <span className="text-blue-400">~</span>
            <span className="text-gray-400">$ </span>
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
