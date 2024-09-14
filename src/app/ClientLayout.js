'use client'

import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'  // Adjust the import path as needed

export default function ClientLayout({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    setIsDarkMode(savedTheme === 'dark' || (!savedTheme && prefersDark))
  }, [])

  useEffect(() => {
    // Apply theme to body
    document.body.classList.toggle('dark-mode', isDarkMode)
    
    // Save theme preference
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main className={isDarkMode ? 'dark' : 'light'}>{children}</main>
    </>
  )
}