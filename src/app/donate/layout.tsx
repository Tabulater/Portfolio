'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function DonateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold gradient-text">
              Aashrith Raj
            </Link>
            <Link
              href="/"
              className="text-text-secondary hover:text-[rgb(var(--primary))] transition-colors"
            >
              Back to Portfolio
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20">
        {children}
      </div>
    </div>
  );
} 