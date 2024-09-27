'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import useDarkMode from '@/app/hooks/darkMode';
import styles from '@/styles/Projects.module.scss'; 

export default function ClientLayout({ children }) {
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  console.log('isDarkMode in ClientLayout:', isDarkMode);

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main>{children}</main>
      <Contact />
    </div>
  );
}