'use client'

import { Inter } from 'next/font/google'
import "@/styles/globals.scss";
import ClientLayout from './ClientLayout'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}