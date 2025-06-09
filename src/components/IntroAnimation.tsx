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
    color: string;
    hue: number;
    angle: number;
    radius: number;
  }>>([]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const phrase = "Welcome";

    if (displayText.length < phrase.length) {
      timeout = setTimeout(() => {
        setDisplayText(phrase.substring(0, displayText.length + 1));
      }, 100);
    } else {
      setShowParticles(true);
      timeout = setTimeout(() => {
        onComplete();
      }, 2000);
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
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Create particles for the name
      const name = "Aashrith Raj";
      const fontSize = 120; // Increased font size
      ctx.font = `bold ${fontSize}px Arial`;
      const textWidth = ctx.measureText(name).width;
      const textHeight = fontSize;

      // Create a temporary canvas to get pixel data
      const tempCanvas = document.createElement('canvas');
      const tempCtx = tempCanvas.getContext('2d');
      if (!tempCtx) return;

      tempCanvas.width = textWidth;
      tempCanvas.height = textHeight;
      tempCtx.font = `bold ${fontSize}px Arial`;
      tempCtx.fillStyle = 'white';
      tempCtx.textAlign = 'center';
      tempCtx.textBaseline = 'middle';
      tempCtx.fillText(name, textWidth / 2, textHeight / 2);

      const imageData = tempCtx.getImageData(0, 0, textWidth, textHeight);
      const pixels = imageData.data;

      // Create particles for the name with higher density
      for (let y = 0; y < textHeight; y += 2) {
        for (let x = 0; x < textWidth; x += 2) {
          const index = (y * textWidth + x) * 4;
          if (pixels[index + 3] > 128) {
            const targetX = centerX - textWidth / 2 + x;
            const targetY = centerY - textHeight / 2 + y;
            const angle = Math.random() * Math.PI * 2;
            const radius = Math.random() * 300 + 200;
            
            particles.push({
              x: centerX + Math.cos(angle) * radius,
              y: centerY + Math.sin(angle) * radius,
              targetX,
              targetY,
              size: 3,
              speedX: 0,
              speedY: 0,
              opacity: 1,
              isName: true,
              color: '#4F46E5',
              hue: Math.random() * 360,
              angle,
              radius
            });
          }
        }
      }

      // Add background particles
      for (let i = 0; i < 200; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * 400;
        particles.push({
          x: centerX + Math.cos(angle) * radius,
          y: centerY + Math.sin(angle) * radius,
          targetX: Math.random() * canvas.width,
          targetY: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          speedX: 0,
          speedY: 0,
          opacity: 0.2,
          isName: false,
          color: 'rgba(79, 70, 229, 0.2)',
          hue: Math.random() * 360,
          angle,
          radius
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
          const speed = particle.isName ? 0.15 : 0.05;
          particle.speedX = dx * speed;
          particle.speedY = dy * speed;
        } else {
          particle.speedX *= 0.95;
          particle.speedY *= 0.95;
        }

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Update color based on position
        if (particle.isName) {
          particle.hue = (particle.hue + 0.5) % 360;
          particle.color = `hsl(${particle.hue}, 70%, 60%)`;
        }

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
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
          className="text-4xl md:text-6xl font-bold mb-4 text-white/80"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {displayText}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
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