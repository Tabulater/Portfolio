'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function HonourRollPage() {
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
            <h1 className="text-5xl font-bold mb-6 gradient-text">Principal's Honour Roll</h1>
            <div className="flex items-center justify-center gap-2 text-text-secondary">
              <span>🎓</span>
              <span>2022-2024</span>
            </div>
          </div>
          
          {/* Content */}
          <div className="max-w-2xl mx-auto">
            {/* Description */}
            <div className="prose prose-lg">
              <p className="text-lg mb-6">
                The Principal's Honour Roll is a prestigious academic recognition awarded to students who 
                maintain an exceptional academic standing throughout the school year. This achievement 
                requires maintaining an average of 80% or higher across all subjects.
              </p>
              
              <p className="text-lg mb-6">
                I have consistently achieved this honor for both the 2022-2023 and 2023-2024 school years, 
                demonstrating my commitment to academic excellence and consistent performance across all subjects.
              </p>

              <div className="bg-card/50 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-semibold mb-4 text-primary">About the Honour Roll</h3>
                <ul className="space-y-3">
                  <li>• Requires 80% or higher average across all subjects</li>
                  <li>• Recognizes consistent academic excellence</li>
                  <li>• Awarded annually to top-performing students</li>
                  <li>• Demonstrates well-rounded academic achievement</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 