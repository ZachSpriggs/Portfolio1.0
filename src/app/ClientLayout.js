'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Contact from '@/components/Contact'

export default function ClientLayout({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setIsDarkMode(savedTheme === 'dark' || (!savedTheme && prefersDark))
  }, [])

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode)
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main>{children}</main>
      <Contact />
    </div>
  )
}