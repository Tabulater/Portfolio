'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface IntroAnimationProps {
  onComplete: () => void;
}

interface Particle {
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
  trail: Array<{ x: number; y: number; opacity: number }>;
  rotationSpeed: number;
  pulsePhase: number;
  glowSize: number;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [displayText, setDisplayText] = useState('');
  const [showParticles, setShowParticles] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });

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

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY
      };
    };

    window.addEventListener('mousemove', handleMouseMove);

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const particles: Particle[] = [];
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Create particles for the name
      const name = "Aashrith Raj";
      const fontSize = 140; // Even larger font size
      ctx.font = `bold ${fontSize}px Arial`;
      const textWidth = ctx.measureText(name).width;
      const textHeight = fontSize;

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
      for (let y = 0; y < textHeight; y += 1.5) { // Increased density
        for (let x = 0; x < textWidth; x += 1.5) {
          const index = (y * textWidth + x) * 4;
          if (pixels[index + 3] > 128) {
            const targetX = centerX - textWidth / 2 + x;
            const targetY = centerY - textHeight / 2 + y;
            const angle = Math.random() * Math.PI * 2;
            const radius = Math.random() * 400 + 300; // Increased radius
            
            particles.push({
              x: centerX + Math.cos(angle) * radius,
              y: centerY + Math.sin(angle) * radius,
              targetX,
              targetY,
              size: 2.5,
              speedX: 0,
              speedY: 0,
              opacity: 1,
              isName: true,
              color: '#4F46E5',
              hue: Math.random() * 360,
              angle,
              radius,
              trail: [],
              rotationSpeed: (Math.random() - 0.5) * 0.02,
              pulsePhase: Math.random() * Math.PI * 2,
              glowSize: Math.random() * 2 + 1
            });
          }
        }
      }

      // Add background particles
      for (let i = 0; i < 300; i++) { // More background particles
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * 600; // Increased radius
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
          radius,
          trail: [],
          rotationSpeed: (Math.random() - 0.5) * 0.01,
          pulsePhase: Math.random() * Math.PI * 2,
          glowSize: Math.random() * 1.5
        });
      }

      particlesRef.current = particles;
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw background gradient
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width / 2
      );
      gradient.addColorStop(0, 'rgba(17, 24, 39, 0.8)');
      gradient.addColorStop(1, 'rgba(17, 24, 39, 0.4)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach(particle => {
        // Update trail
        particle.trail.unshift({ x: particle.x, y: particle.y, opacity: 1 });
        if (particle.trail.length > 10) particle.trail.pop();

        // Calculate direction to target
        const dx = particle.targetX - particle.x;
        const dy = particle.targetY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Mouse interaction
        const mouseDx = mouseRef.current.x - particle.x;
        const mouseDy = mouseRef.current.y - particle.y;
        const mouseDistance = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);
        const mouseForce = Math.max(0, 1 - mouseDistance / 200) * 2;

        if (distance > 1) {
          const speed = particle.isName ? 0.12 : 0.04;
          particle.speedX = dx * speed;
          particle.speedY = dy * speed;
        } else {
          particle.speedX *= 0.95;
          particle.speedY *= 0.95;
        }

        // Apply mouse repulsion
        if (mouseDistance < 200) {
          particle.speedX -= (mouseDx / mouseDistance) * mouseForce;
          particle.speedY -= (mouseDy / mouseDistance) * mouseForce;
        }

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Update rotation and pulse
        particle.angle += particle.rotationSpeed;
        particle.pulsePhase += 0.05;
        const pulse = Math.sin(particle.pulsePhase) * 0.5 + 1;

        // Update color based on position and time
        if (particle.isName) {
          particle.hue = (particle.hue + 0.5) % 360;
          particle.color = `hsla(${particle.hue}, 70%, 60%, ${pulse * 0.8 + 0.2})`;
        }

        // Draw trail
        particle.trail.forEach((point, index) => {
          const trailOpacity = (1 - index / particle.trail.length) * 0.3;
          ctx.beginPath();
          ctx.arc(point.x, point.y, particle.size * 0.8, 0, Math.PI * 2);
          ctx.fillStyle = particle.isName 
            ? `hsla(${particle.hue}, 70%, 60%, ${trailOpacity})`
            : `rgba(79, 70, 229, ${trailOpacity * 0.2})`;
          ctx.fill();
        });

        // Draw particle with glow
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * pulse, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        // Add glow effect
        const glow = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * particle.glowSize * pulse
        );
        glow.addColorStop(0, particle.isName 
          ? `hsla(${particle.hue}, 70%, 60%, 0.3)`
          : 'rgba(79, 70, 229, 0.1)'
        );
        glow.addColorStop(1, 'transparent');
        ctx.fillStyle = glow;
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
      window.removeEventListener('mousemove', handleMouseMove);
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