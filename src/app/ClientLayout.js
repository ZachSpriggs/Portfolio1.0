'use client'

import { useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Contact from '@/components/Contact'
import useDarkMode from './hooks/darkMode'

export default function ClientLayout({ children }) {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main>{children}</main>
      <Contact />
    </div>
  )
}