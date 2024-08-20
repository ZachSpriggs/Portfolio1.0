// src/components/Navbar.js
'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from '@/styles/Navbar.module.scss'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className={`${styles.navbar} ${isOpen ? styles.open : ''}`}>
      <div className={styles.navbarContainer}>
        <Link className={styles.logo} href="#whoIAm">Zach Spriggs</Link>
        <div className={`${styles.navItems} ${isOpen ? styles.open : ''}`}>
          <Link href="#who-i-am" className={styles.navItem} onClick={() => setIsOpen(false)}>Who I Am</Link>
          <Link href="#work-experience" className={styles.navItem} onClick={() => setIsOpen(false)}>Work Experience</Link>
          <Link href="#projects" className={styles.navItem} onClick={() => setIsOpen(false)}>Projects</Link>
          <Link href="#contact" className={styles.navItem} onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
        <div className={styles.hamburger} onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </nav>
  )
}