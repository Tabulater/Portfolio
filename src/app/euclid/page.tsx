'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function EuclidPage() {
  const router = useRouter();

  const handleBack = () => {
    sessionStorage.setItem('skipIntro', 'true');
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.button
          onClick={handleBack}
          className="mb-8 text-blue-600 hover:text-blue-800 flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ← Back to Portfolio
        </motion.button>
        
        {/* Rest of the code stays the same ... */}
      </div>
    </div>
  );
} 