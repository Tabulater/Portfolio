'use client'

import { Suspense, lazy, useEffect, useRef, useCallback, useMemo, useState } from 'react'
// Preload Spline for better performance
const Spline = lazy(() => import('@splinetool/react-spline'), {
  ssr: false
})

interface SplineSceneProps {
  scene: string
  className?: string
  onError?: (error: any) => void
  onLoad?: () => void
}

export function SplineScene({ scene, className, onError, onLoad }: SplineSceneProps) {
  const splineRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastEmitTime = useRef(0);
  const lastPosition = useRef({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Throttle mouse events for better performance
  const handleMouseMove = useCallback((event: MouseEvent) => {
    const now = Date.now();
    const throttleMs = 16; // ~60fps
    
    if (now - lastEmitTime.current < throttleMs) {
      return;
    }
    
    if (splineRef.current) {
      // Use global window coordinates for consistent tracking
      const x = event.clientX / window.innerWidth;
      const y = event.clientY / window.innerHeight;
      
      // Ensure coordinates are within bounds
      const clampedX = Math.max(0, Math.min(1, x));
      const clampedY = Math.max(0, Math.min(1, y));
      
      // Only emit if position changed significantly
      const threshold = 0.01;
      if (Math.abs(clampedX - lastPosition.current.x) < threshold && 
          Math.abs(clampedY - lastPosition.current.y) < threshold) {
        return;
      }
      
      lastPosition.current = { x: clampedX, y: clampedY };
      lastEmitTime.current = now;
      
      // Enhanced head movement for different screen regions
      let headRotationX, headRotationY;
      
      // Calculate head rotation based on cursor position - ALWAYS rotate regardless of area
      if (clampedX > 0.3 && clampedX < 0.7 && clampedY > 0.2 && clampedY < 0.8) {
        // Center area (text content) - robot looks more directly but still rotates
        headRotationX = (clampedY - 0.5) * 50; // -25 to 25 degrees
        headRotationY = (clampedX - 0.5) * 50; // -25 to 25 degrees
      } else {
        // Outer areas - more pronounced head movement
        headRotationX = (clampedY - 0.5) * 60; // -30 to 30 degrees
        headRotationY = (clampedX - 0.5) * 60; // -30 to 30 degrees
      }
      
      // Ensure head always rotates when cursor moves, even in text area
      if (clampedY > 0.4 && clampedY < 0.6) {
        // Middle vertical area - robot is "reading" text but still rotates
        headRotationX = (clampedY - 0.5) * 40; // -20 to 20 degrees
        headRotationY = (clampedX - 0.5) * 40; // -20 to 20 degrees
      }
      
      // Force head rotation to always work
      const finalHeadRotationX = (clampedY - 0.5) * 45; // Always rotate
      const finalHeadRotationY = (clampedX - 0.5) * 45; // Always rotate
      
      // Try multiple methods to control the robot's head
      try {
        // Method 1: Direct cursor event
        splineRef.current.emit('cursorMove', { x: clampedX, y: clampedY });
        
        // Method 2: Mouse position event
        splineRef.current.emit('mouseMove', { x: clampedX, y: clampedY });
        
        // Method 3: Look at target with enhanced positioning
        splineRef.current.emit('lookAt', { x: clampedX, y: clampedY });
        
        // Method 4: Enhanced head rotation - ALWAYS apply
        splineRef.current.emit('headRotation', { x: finalHeadRotationX, y: finalHeadRotationY });
        
        // Method 5: Eye tracking for text reading
        if (clampedX > 0.3 && clampedX < 0.7) {
          splineRef.current.emit('eyeTrack', { x: clampedX, y: clampedY });
        }
        
        // Method 6: Reading mode when in center
        if (clampedX > 0.2 && clampedX < 0.8 && clampedY > 0.3 && clampedY < 0.7) {
          splineRef.current.emit('readingMode', { active: true, x: clampedX, y: clampedY });
        } else {
          splineRef.current.emit('readingMode', { active: false, x: clampedX, y: clampedY });
        }
        
        // Method 7: Global mouse tracking
        splineRef.current.emit('globalMouse', { x: clampedX, y: clampedY });
        
        // Method 8: Force head movement
        splineRef.current.emit('forceHeadMove', { x: finalHeadRotationX, y: finalHeadRotationY });
        
        // Method 9: Continuous head tracking
        splineRef.current.emit('continuousTrack', { x: clampedX, y: clampedY });
        
      } catch (error) {
        // Silently handle if events are not supported
      }
    }
  }, []);

  useEffect(() => {
    // Preload Spline for better performance
    const preloadSpline = () => {
      import('@splinetool/react-spline');
    };
    
    // Preload after a short delay to not block initial render
    const preloadTimer = setTimeout(preloadSpline, 100);
    
    // Add mouse move listener to the entire window for better tracking
    // Use capture phase to ensure we get events even when over other elements
    window.addEventListener('mousemove', handleMouseMove, { passive: true, capture: true });

    return () => {
      clearTimeout(preloadTimer);
      window.removeEventListener('mousemove', handleMouseMove, { capture: true });
    };
  }, [handleMouseMove]);

  const handleError = useCallback((error: any) => {
    console.error('SplineScene error:', error);
    setHasError(true);
    setIsLoading(false);
    if (onError) {
      onError(error);
    }
  }, [onError]);

  const handleLoad = useCallback((spline: any) => {
    console.log('SplineScene loaded successfully');
    splineRef.current = spline;
    setIsLoading(false);
    if (onLoad) {
      onLoad();
    }
  }, [onLoad]);

  // Memoize the container styles
  const containerStyle = useMemo(() => ({
    pointerEvents: 'auto' as const,
    zIndex: 1
  }), []);

  const splineStyle = useMemo(() => ({
    pointerEvents: 'auto' as const
  }), []);

  // Show error state if there's an error
  if (hasError) {
    return (
      <div ref={containerRef} className={className} style={containerStyle}>
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[rgb(var(--primary))]/10 via-[rgb(var(--secondary))]/5 to-[rgb(var(--primary))]/10">
          <div className="text-center">
            <div className="text-4xl mb-4">🤖</div>
            <p className="text-text-secondary">3D Scene Unavailable</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className={className} style={containerStyle}>
      <Suspense 
        fallback={
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[rgb(var(--primary))]/10 via-[rgb(var(--secondary))]/5 to-[rgb(var(--primary))]/10">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
              <p className="text-text-secondary">Loading 3D Scene...</p>
            </div>
          </div>
        }
      >
        <Spline
          scene={scene}
          className="w-full h-full"
          style={splineStyle}
          onError={handleError}
          onLoad={handleLoad}
        />
      </Suspense>
    </div>
  )
}