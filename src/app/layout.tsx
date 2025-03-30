import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aashrith | Portfolio',
  description: 'Professional portfolio showcasing my work, skills, and achievements in software development.',
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
  themeColor: '#000000',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  keywords: ['portfolio', 'developer', 'software engineer', 'web development', 'Aashrith'],
  authors: [{ name: 'Aashrith' }],
  openGraph: {
    title: 'Aashrith | Portfolio',
    description: 'Professional portfolio showcasing my work, skills, and achievements in software development.',
    url: 'https://your-portfolio-url.com',
    siteName: 'Aashrith Portfolio',
    images: [
      {
        url: '/Favicon.png',
        width: 1200,
        height: 630,
        alt: 'Aashrith Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aashrith | Portfolio',
    description: 'Professional portfolio showcasing my work, skills, and achievements in software development.',
    images: ['/Favicon.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-primary text-text-primary`}>
        <main className="min-h-screen">
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  )
} 