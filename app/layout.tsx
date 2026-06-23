import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TANI BANGKIT - Aplikasi Pendamping Petani',
  description: 'SOP Budidaya Pertanian Presisi Teruji, Kalender HST, dan Deteksi Hama.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className="bg-slate-50 antialiased">
        {children}
      </body>
    </html>
  )
}
