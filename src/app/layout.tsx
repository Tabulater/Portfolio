import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: 'Aashrith Raj Tatipamula',
  description: 'Personal portfolio of Aashrith Raj Tatipamula, a student developer showcasing achievements including Blue Ocean Competition and Occasus Creative Writing Contest winner.',
  verification: {
    google: '8Yl3Db-N4LEBCmjt5Jgf_kvFbeoNa8W1_hCwxqZ0vGc',
  },
  icons: {
    icon: [
      { url: '/Favicon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/Favicon.png', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  robots: 'index, follow',
  keywords: [
    'Aashrith Raj Tatipamula',
    'Aashrith Tatipamula',
    'Aashrith Raj',
    'student developer',
    'Blue Ocean Competition',
    'Occasus Creative Writing Contest',
    'GaiaCure',
    'portfolio',
    'London Ontario',
    'Mother Teresa Catholic Secondary School'
  ],
  authors: [{ name: 'Aashrith Raj Tatipamula' }],
  openGraph: {
    title: 'Aashrith Raj Tatipamula | Student & Developer Portfolio',
    description: 'Personal portfolio of Aashrith Raj Tatipamula, a student developer showcasing achievements including Blue Ocean Competition and Occasus Creative Writing Contest winner.',
    url: 'https://aashrithrajtatipamula.vercel.app',
    siteName: 'Aashrith Raj Tatipamula Portfolio',
    images: [
      {
        url: '/Favicon.png',
        width: 1200,
        height: 630,
        alt: 'Aashrith Raj Tatipamula Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aashrith Raj Tatipamula',
    description: 'Personal portfolio of Aashrith Raj Tatipamula, a student developer showcasing achievements including Blue Ocean Competition and Occasus Creative Writing Contest winner.',
    images: ['/Favicon.png'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical resources */}
        <link rel="preload" href="/Profile.png" as="image" />
        <link rel="preload" href="/Favicon.png" as="image" />
        <link rel="dns-prefetch" href="//prod.spline.design" />
        <link rel="dns-prefetch" href="//21st.dev" />
        <link rel="preconnect" href="https://prod.spline.design" />
        <link rel="preconnect" href="https://21st.dev" />
      </head>
      <body className={`${inter.className} bg-primary text-text-primary`}>
        <main className="min-h-screen">
          {children}
        </main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
} 
