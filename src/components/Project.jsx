import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Projects.module.scss';

const Project = ({ project }) => {
  const projectSlug = encodeURIComponent(project.title.toLowerCase().replace(/\s+/g, '-'));

  return (
    <Link 
      href={`/projects/${projectSlug}`}
      className={styles.projectLink}
    >
      <div className={styles.flipCard}>
        <div className={styles.flipCardInner}>
          <div className={styles.flipCardFront}>
            <div className={styles.titleBar}>
              <h3>{project.title}</h3>
            </div>
            <Image src={project.image} alt={project.title} width={500} height={300} className={styles.projectImage} />
            <strong className={styles.elevatorPitch}>{project.elevator_pitch}</strong>
            <div className={styles.teamSize}>
              <strong>Time Line: {project.duration}</strong>
              <h4>{project.team} Project</h4>
              {project.team_size.map((member, index) => (
                <p key={index}>{member}</p>
              ))}
            </div>
            <div className={styles.technologiesGrid}>
              {project.technologies.map((tech, index) => (
                <span key={index} className={styles.techIcon}>{tech}</span>
              ))}
            </div>
          </div>
          <div className={styles.flipCardBack}>
            <h3>{project.title}</h3>
            <strong>{project.description}</strong>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Project