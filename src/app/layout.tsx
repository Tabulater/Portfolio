import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aashrith | Portfolio',
  description: 'Professional portfolio showcasing my work, skills, and achievements in software development.',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', type: 'image/png' },
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
        url: '/og-image.png',
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
    images: ['/og-image.png'],
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
      </body>
    </html>
  )
} 