import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PlausibleProvider } from '@/components/plausible-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AutoEmpire.ai – Digitale Produkte & AI-Education',
  description:
    'Lerne KI-gestützte Tools, sichere dir High-Value-Templates und starte dein eigenes Online-Business.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <PlausibleProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </PlausibleProvider>
      </body>
    </html>
  )
}
