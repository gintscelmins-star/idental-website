import type { Metadata } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'iDental — Zobārstniecības klīnika Rīgā | Implanti, Estētika',
  description: 'iDental — profesionāla zobārstniecība Rīgas centrā. Zobu implanti, estētiskā zobārstniecība, higiēna. Katru dienu 9:00–20:00. ⭐ 4.7/5 no 302 atsauksmēm.',
  keywords: 'zobārsts Rīgā, zobu implanti, estētiskā zobārstniecība, iDental, zobārstniecība centrs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="lv">
      <body className={`${dmSans.variable} ${playfair.variable} font-sans bg-white text-slate-800`}>
        {children}
      </body>
    </html>
  )
}
