'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);
  const [text, setText] = useState('');
  const fullText = "Welcome to my portfolio...";
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (step < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + fullText[step]);
        setStep(prev => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        onComplete();
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [step, onComplete]);

  return (
    <div className="fixed inset-0 bg-primary z-50 flex items-center justify-center">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-mono text-secondary"
        >
          {text}
          <span className={showCursor ? 'opacity-100' : 'opacity-0'}>_</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-textSecondary"
        >
          Loading your experience...
        </motion.div>
      </div>
    </div>
  );
} 