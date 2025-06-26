'use client'

import { SplineSceneBasic } from "@/components/ui/demo";

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Interactive 3D Demo
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience the power of Spline 3D scenes integrated with shadcn components
          </p>
        </div>
        
        <SplineSceneBasic />
        
        <div className="mt-12 text-center">
          <p className="text-gray-400">
            Move your mouse over the card to see the spotlight effect and interact with the 3D scene
          </p>
        </div>
      </div>
    </div>
  );
} 