'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function BlueOceanPage() {
  const router = useRouter();

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    sessionStorage.setItem('skipIntro', 'true');
    router.push('/', { scroll: false });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <Link 
            href="/"
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-white hover:text-white/80 mb-8 transition-colors bg-card/50 px-6 py-3 rounded-lg hover:bg-card/70 group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:-translate-x-1 transition-transform">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            <span className="font-semibold">Back to Aashrith's Portfolio</span>
          </Link>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6 gradient-text">Blue Ocean Competition Finalist</h1>
            <div className="flex items-center justify-center gap-2 text-text-secondary">
              <span>🏆</span>
              <span>2025</span>
            </div>
          </div>
          
          {/* Content */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Description */}
            <div className="prose prose-lg">
              <p className="text-lg mb-6">
                The Blue Ocean Competition is a prestigious international business competition that challenges students 
                to develop innovative solutions to real-world problems. The competition focuses on creating "blue ocean" 
                strategies - finding untapped market spaces where competition is irrelevant.
              </p>
              
              <p className="text-lg mb-6">
                In 2025, I achieved a top 350 placement in the competition with my pitch for "Gaia Cure," 
                a healthcare solution that demonstrates innovative thinking and problem-solving in the medical field.
              </p>

              <div className="bg-card/50 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-semibold mb-4 text-primary">About the Competition</h3>
                <ul className="space-y-3">
                  <li>• International competition focused on innovative business solutions</li>
                  <li>• Based on the Blue Ocean Strategy methodology</li>
                  <li>• Attracts participants from top universities worldwide</li>
                  <li>• Emphasizes practical, implementable solutions</li>
                </ul>
              </div>
            </div>

            {/* PDF Viewer */}
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-2xl bg-card/50">
              <iframe
                src="/blue-ocean-pitch.pdf"
                className="w-full h-full"
                title="Blue Ocean Competition Pitch"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 