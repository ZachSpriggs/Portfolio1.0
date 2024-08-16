'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import styles from '@/styles/Projects.module.scss'

function ProjectCard({ title, description, image, setActiveCard }) {
  const [isFlipped, setIsFlipped] = useState(false)
  const cardRef = useRef(null)
  const [style, setStyle] = useState({})

  const handleFlip = () => {
    if (!isFlipped) {
      const card = cardRef.current
      const rect = card.getBoundingClientRect()
      const centerX = window.innerWidth / 2 - rect.width / 2
      const centerY = window.innerHeight / 2 - rect.height / 2
      const translateX = centerX - rect.left
      const translateY = centerY - rect.top

      setStyle({
        transform: `translate(${translateX}px, ${translateY}px) rotateY(180deg)`,
      })
      setActiveCard(cardRef.current)
    } else {
      setStyle({})
      setActiveCard(null)
    }
    setIsFlipped(!isFlipped)
  }

  useEffect(() => {
    const handleResize = () => {
      if (isFlipped) {
        handleFlip()
        handleFlip()
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isFlipped])

  return (
    <div className={styles.projectCard} ref={cardRef}>
      <div 
        className={`${styles.cardInner} ${isFlipped ? styles.flipped : ''}`} 
        style={style}
        onClick={handleFlip}
      >
        <div className={`${styles.cardFace} ${styles.cardFront}`}>
          <Image src={image} alt={title} layout="fill" objectFit="cover" />
          <h3>{title}</h3>
        </div>
        <div className={`${styles.cardFace} ${styles.cardBack}`}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [activeCard, setActiveCard] = useState(null)

  const projects = [
    { title: "Project 1", description: "Description of project 1", image: "/project1.jpg" },
    { title: "Project 2", description: "Description of project 2", image: "/project2.jpg" },
    // Add more projects as needed
  ]

  return (
    <div className={styles.section}>
      <h2>Projects</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <ProjectCard 
            key={index} 
            {...project} 
            setActiveCard={setActiveCard}
          />
        ))}
      </div>
    </div>
  )
}