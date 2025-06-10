'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function OccausPage() {
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
            <h1 className="text-5xl font-bold mb-6 gradient-text">Occaus Creative Writing Contest Winner</h1>
            <div className="flex items-center justify-center gap-2 text-text-secondary">
              <span>✍️</span>
              <span>2025</span>
            </div>
          </div>
          
          {/* Content */}
          <div className="max-w-2xl mx-auto">
            {/* Description */}
            <div className="prose prose-lg">
              <p className="text-lg mb-6">
                The Occaus Creative Writing Contest is Western University's premier literary competition, 
                celebrating excellence in creative writing across various genres. The contest attracts 
                submissions from talented writers across the university community.
              </p>
              
              <p className="text-lg mb-6">
                In 2025, I won the fiction category with my short story "Glassblower's Ephemera," 
                a piece that showcases creative excellence and literary craftsmanship. The story 
                explores themes of artistry, memory, and transformation through the lens of a 
                master glassblower's life.
              </p>

              <div className="bg-card/50 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-semibold mb-4 text-primary">About the Contest</h3>
                <ul className="space-y-3">
                  <li>• Western University's annual creative writing competition</li>
                  <li>• Multiple categories including fiction, poetry, and creative non-fiction</li>
                  <li>• Judged by faculty and published authors</li>
                  <li>• Winning entries are published in the university's literary journal</li>
                </ul>
              </div>

              <div className="mt-8">
                <Link 
                  href="https://www.uwo.ca/writing/undergraduate/occasus_high_school_creative_writing_contest/recipients.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors"
                >
                  <span>View Official Contest Results</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 