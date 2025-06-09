'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [displayText, setDisplayText] = useState('');
  const [showParticles, setShowParticles] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Array<{
    x: number;
    y: number;
    targetX: number;
    targetY: number;
    size: number;
    speedX: number;
    speedY: number;
    opacity: number;
    isName: boolean;
  }>>([]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const phrase = "Engineering the Future";

    if (displayText.length < phrase.length) {
      timeout = setTimeout(() => {
        setDisplayText(phrase.substring(0, displayText.length + 1));
      }, 50);
    } else {
      setShowParticles(true);
      timeout = setTimeout(() => {
        onComplete();
      }, 1500);
    }

    return () => clearTimeout(timeout);
  }, [displayText, onComplete]);

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
      const particleCount = 200;
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Create particles for the name
      const name = "Aashrith Raj";
      const fontSize = 60;
      ctx.font = `${fontSize}px Arial`;
      const textWidth = ctx.measureText(name).width;
      const textHeight = fontSize;

      for (let i = 0; i < particleCount; i++) {
        const isName = i < particleCount * 0.7; // 70% of particles form the name
        let targetX, targetY;

        if (isName) {
          // Position particles to form the name
          const x = centerX - textWidth / 2 + Math.random() * textWidth;
          const y = centerY - textHeight / 2 + Math.random() * textHeight;
          targetX = x;
          targetY = y;
        } else {
          // Random positions for background particles
          targetX = Math.random() * canvas.width;
          targetY = Math.random() * canvas.height;
        }

        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          targetX,
          targetY,
          size: isName ? Math.random() * 2 + 1 : Math.random() * 3 + 1,
          speedX: 0,
          speedY: 0,
          opacity: isName ? 1 : Math.random() * 0.5 + 0.2,
          isName
        });
      }

      particlesRef.current = particles;
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach(particle => {
        // Calculate direction to target
        const dx = particle.targetX - particle.x;
        const dy = particle.targetY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance > 1) {
          particle.speedX = dx * 0.1;
          particle.speedY = dy * 0.1;
        } else {
          particle.speedX *= 0.95;
          particle.speedY *= 0.95;
        }

        particle.x += particle.speedX;
        particle.y += particle.speedY;

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