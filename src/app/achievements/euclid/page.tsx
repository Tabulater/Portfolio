import Image from 'next/image';
import Link from 'next/link';

export default function EuclidPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <Link 
            href="/#achievements"
            className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors"
          >
            ← Back to Achievements
          </Link>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6 gradient-text">Euclid Mathematics Contest</h1>
            <div className="flex items-center justify-center gap-2 text-text-secondary">
              <span>📐</span>
              <span>2024</span>
            </div>
          </div>
          
          {/* Content */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Description */}
            <div className="prose prose-lg">
              <p className="text-lg mb-6">
                The Euclid Mathematics Contest is one of the most prestigious mathematics competitions in Canada, 
                organized by the Centre for Education in Mathematics and Computing (CEMC) at the University of Waterloo. 
                This contest challenges students with complex mathematical problems that test their problem-solving skills, 
                mathematical reasoning, and creative thinking.
              </p>
              
              <p className="text-lg mb-6">
                In 2024, I participated in this challenging competition and received a Certificate of Participation, 
                demonstrating my commitment to mathematical excellence and problem-solving.
              </p>

              <div className="bg-card/50 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-semibold mb-4 text-primary">About the Contest</h3>
                <ul className="space-y-3">
                  <li>• 2.5-hour competition with 10 challenging problems</li>
                  <li>• Tests advanced mathematical concepts and problem-solving</li>
                  <li>• Recognized by universities worldwide</li>
                  <li>• Part of the CEMC's comprehensive mathematics program</li>
                </ul>
              </div>
            </div>

            {/* Certificate Image */}
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/Euclid Certification_2025.jpg"
                alt="Euclid Mathematics Contest Certificate"
                fill
                className="object-contain bg-card/50"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 