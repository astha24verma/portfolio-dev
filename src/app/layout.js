import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] }) // other subsets: ['cyrillic', 'greek']

export const metadata = {
  title: 'Astha Verma Portfolio',
  description: 'Created by Astha Verma',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
