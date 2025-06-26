'use client'

import { Suspense, lazy } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
  onError?: (error: any) => void
}

export function SplineScene({ scene, className, onError }: SplineSceneProps) {
  const handleError = (error: any) => {
    console.error('SplineScene error:', error);
    if (onError) {
      onError(error);
    }
  };

  return (
    <Suspense 
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <span className="loader"></span>
        </div>
      }
    >
      <Spline
        scene={scene}
        className={className}
        onError={handleError}
      />
    </Suspense>
  )
}