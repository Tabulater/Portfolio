import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aashrith Raj Tatipamula',
  description: 'Portfolio website showcasing my projects, skills, and achievements.',
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