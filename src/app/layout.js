import { Inter } from 'next/font/google'
import './globals.css'
import "@/styles/globals.scss";
import ClientLayout from './ClientLayout'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Zach Spriggs Portfolio',
  description: 'Portfolio website of Zach Spriggs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}