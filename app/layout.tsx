import type { Metadata } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({ 
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'iDental — Zobārstniecības klīnika Rīgā | Implanti, Estētika',
  description: 'iDental — klientu mīļākā zobārstniecība Rīgas centrā. Zobu implanti, estētiskā zobārstniecība, higiēna. Katru dienu 9:00–20:00. ⭐ 4.7/5 no 302 atsauksmēm.',
  keywords: 'zobārsts Rīgā, zobu implanti, estētiskā zobārstniecība, iDental, zobārstniecība centrs, Tērbatas iela',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="lv" className={`${dmSans.variable} ${playfair.variable}`}>
      <body className="font-sans bg-white text-slate-800 antialiased">
        {children}
      </body>
    </html>
  )
}
