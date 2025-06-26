// Performance optimization utilities

// Debounce function for performance
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

// Throttle function for performance
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Intersection Observer for lazy loading
export function createIntersectionObserver(
  callback: IntersectionObserverCallback,
  options: IntersectionObserverInit = {}
): IntersectionObserver {
  return new IntersectionObserver(callback, {
    threshold: 0.1,
    rootMargin: '50px',
    ...options,
  });
}

// Preload critical resources
export function preloadCriticalResources() {
  // Preload critical images
  const criticalImages = [
    '/Profile.png',
    '/Favicon.png',
  ];
  
  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
}

// Optimize images
export function optimizeImageLoading() {
  // Add loading="lazy" to non-critical images
  const images = document.querySelectorAll('img:not([loading])');
  images.forEach(img => {
    if (!img.classList.contains('critical')) {
      img.setAttribute('loading', 'lazy');
    }
  });
}

// Performance monitoring
export function monitorPerformance() {
  if (typeof window !== 'undefined' && 'performance' in window) {
    // Monitor Core Web Vitals
    if ('web-vital' in window) {
      // This would be implemented with web-vitals library
      console.log('Performance monitoring enabled');
    }
  }
} 