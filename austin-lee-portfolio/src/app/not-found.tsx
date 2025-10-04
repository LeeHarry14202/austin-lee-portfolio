import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Spacer */}
      <div style={{ height: '128px' }} />

      <main className="flex items-center justify-center min-h-[calc(100vh-128px)] px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-light tracking-widest mb-4">
            404
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            Page not found
          </p>
          <Link
            href="/"
            className="text-white hover:text-gray-300 transition-colors tracking-wide"
          >
            ← Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
