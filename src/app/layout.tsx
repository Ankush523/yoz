import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Yoz - Web3 notifications made easier',
  description: 'Save time, streamline your development, and reach users on their preferred channels',
}

export default function RootLayout({ children }: { children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
