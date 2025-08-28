'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function HorizonEssayPrizePage() {
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
            <h1 className="text-5xl font-bold mb-6 gradient-text">Excellence Award – Horizon Academic Essay Prize</h1>
            <div className="flex items-center justify-center gap-2 text-text-secondary">
              <span>🏅</span>
              <span>August 2025</span>
            </div>
            <p className="text-lg text-text-secondary mt-2">Horizon Academic Research Program</p>
          </div>
          
          {/* Content */}
          <div className="max-w-2xl mx-auto">
            {/* Description */}
            <div className="bg-card/50 p-8 rounded-xl mb-8">
              <h2 className="text-2xl font-bold mb-4 text-primary">Achievement Details</h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                I am honored to receive the Excellence Award in the 2025 Horizon Academic Essay Prize! 
                My essay ranked among the top 20% out of 1,952 submissions worldwide, demonstrating 
                excellence in originality, critical thinking, and academic writing.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-primary text-lg">🏆</span>
                  <div>
                    <h3 className="font-semibold text-white">Top 20% Placement</h3>
                    <p className="text-text-secondary text-sm">Ranked among the top performers out of 1,952 international submissions</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-primary text-lg">💡</span>
                  <div>
                    <h3 className="font-semibold text-white">Excellence in Originality</h3>
                    <p className="text-text-secondary text-sm">Recognized for innovative thinking and unique perspectives</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-primary text-lg">🧠</span>
                  <div>
                    <h3 className="font-semibold text-white">Critical Thinking</h3>
                    <p className="text-text-secondary text-sm">Demonstrated strong analytical and reasoning skills</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-primary text-lg">✍️</span>
                  <div>
                    <h3 className="font-semibold text-white">Academic Writing</h3>
                    <p className="text-text-secondary text-sm">Showcased exceptional writing quality and scholarly communication</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-primary text-lg">💰</span>
                  <div>
                    <h3 className="font-semibold text-white">$1,000 USD Scholarship</h3>
                    <p className="text-text-secondary text-sm">Award includes financial support for Horizon's research program</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Certificate PDF Viewer */}
            <div className="bg-card/50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-4 text-primary">Certificate</h2>
              <div className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl bg-card/50">
                <iframe
                  src="/HorizonCertificate.pdf"
                  className="w-full h-full"
                  title="Horizon Academic Essay Prize Certificate"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
