'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface IntroAnimationProps {
  onComplete: () => void;
}

const phrases = [
  "Engineering the future...",
  "Building robots...",
  "Let's create!"
];

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showParticles, setShowParticles] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Array<{
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    opacity: number;
  }>>([]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentPhraseText = phrases[currentPhrase];

    if (!isDeleting && displayText === currentPhraseText) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 800);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    } else {
      const delta = isDeleting ? -1 : 1;
      timeout = setTimeout(() => {
        setDisplayText(currentPhraseText.substring(0, displayText.length + delta));
      }, isDeleting ? 30 : 50);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentPhrase]);

  useEffect(() => {
    if (currentPhrase === phrases.length - 1 && displayText === phrases[phrases.length - 1]) {
      setShowParticles(true);
      const timeout = setTimeout(() => {
        onComplete();
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [currentPhrase, displayText, onComplete]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const particles = [];
      const particleCount = 100;

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 4 + 1,
          speedX: (Math.random() - 0.5) * 4,
          speedY: (Math.random() - 0.5) * 4,
          opacity: Math.random() * 0.7 + 0.3
        });
      }

      particlesRef.current = particles;
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(var(--primary), ${particle.opacity})`;
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createParticles();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [showParticles]);

  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ opacity: showParticles ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="text-center relative z-10"
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-4 gradient-text"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 0.5, repeat: Infinity }}
        >
          {displayText}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.3, repeat: Infinity }}
            className="inline-block ml-1"
          >
            |
          </motion.span>
        </motion.h1>
      </motion.div>
    </div>
  );
};

export default IntroAnimation; 