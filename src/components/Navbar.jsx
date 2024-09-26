import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaMoon, FaSun } from "react-icons/fa";
import styles from "../styles/Navbar.module.scss";

export default function Navbar({ isDarkMode, toggleDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  console.log('isDarkMode in Navbar:', isDarkMode);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`${styles.navbar} ${isOpen ? styles.open : ""} ${
        isDarkMode ? styles.darkMode : ""
      }`}
    >
      <div className={styles.navbarContainer}>
        <Link className={styles.logo} href="/">
          Zach Spriggs
        </Link>
        <div className={`${styles.navItems} ${isOpen ? styles.open : ""}`}>
          <Link
            href="https://www.linkedin.com/in/zachspriggs/"
            target="_blank"
            className={styles.navItem}
            onClick={() => setIsOpen(false)}
          >
            <FaLinkedin size={30} />
          </Link>
          <Link
            href="https://github.com/ZachSpriggs"
            target="_blank"
            className={styles.navItem}
            onClick={() => setIsOpen(false)}
          >
            <FaGithub size={30} />
          </Link>
            <div className={styles.navItem}>
              <button
                onClick={toggleDarkMode}
                className={styles.darkModeToggle}
              >
                {isDarkMode ? <FaSun size={28} /> : <FaMoon size={28} />}
              </button>
            </div>
        </div>
        <div className={styles.hamburger} onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </nav>
  );
}
