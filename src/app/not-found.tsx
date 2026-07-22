import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <div className="text-center px-6">
        <p className="font-mono text-accent text-sm mb-4">404</p>
        <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">Page Not Found</h1>
        <p className="text-text-secondary mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className="btn-primary">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to Home
        </Link>
      </div>
    </div>
  );
}
