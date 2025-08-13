'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function CoopPage() {
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
            <h1 className="text-5xl font-bold mb-6 gradient-text">Coop Certificate of Completion</h1>
            <div className="flex items-center justify-center gap-2 text-text-secondary">
              <span>🎯</span>
              <span>2025</span>
            </div>
          </div>
          
          {/* Content */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Description */}
            <div className="prose prose-lg">
              <p className="text-lg mb-6">
                This research project investigates the application of machine learning techniques to predict performance 
                metrics in G/G/s queue systems. By analyzing simulation-generated datasets, the study compares the 
                effectiveness of Neural Networks, Random Forest, and XGBoost algorithms in forecasting queue behavior 
                and system performance.
              </p>
              
              <p className="text-lg mb-6">
                The project demonstrates how modern machine learning approaches can provide accurate predictions for 
                complex queue systems, offering insights into system optimization and resource allocation strategies. 
                This work was completed as part of the King's Internship Program, showcasing practical application 
                of theoretical concepts in real-world scenarios.
              </p>

              <div className="bg-card/50 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-semibold mb-4 text-primary">ML Algorithms Implemented</h3>
                <ul className="space-y-3">
                  <li>• <strong>Neural Networks:</strong> Multi-layer perceptron with backpropagation and dropout regularization</li>
                  <li>• <strong>Random Forest:</strong> Ensemble method with bootstrap sampling and feature importance analysis</li>
                  <li>• <strong>XGBoost:</strong> Gradient boosting with L1/L2 regularization and early stopping</li>
                </ul>
              </div>

              <div className="bg-card/50 p-6 rounded-lg mt-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Queue Models Analyzed</h3>
                <ul className="space-y-3">
                  <li>• <strong>M/M/S Queue:</strong> General arrival and service time distributions</li>
                  <li>• <strong>G/G/S Queue:</strong> Multi-server queue system with parallel processing capabilities</li>
                  <li>• Performance metrics prediction including waiting time (Wq) analysis</li>
                </ul>
              </div>

              <div className="bg-card/50 p-6 rounded-lg mt-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Project Outcomes</h3>
                <ul className="space-y-3">
                  <li>• Comparative analysis of prediction accuracy across all ML models</li>
                  <li>• Comprehensive error analysis for queue waiting time predictions</li>
                  <li>• Insights into system optimization and resource allocation</li>
                  <li>• Practical application of ML in operations research and queue theory</li>
                </ul>
              </div>
            </div>

            {/* Certificate Image */}
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/CertificateKings.png"
                alt="Coop Certificate of Completion"
                width={400}
                height={600}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
