import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Projects.module.scss';
import { projects } from "@/data/projects";

const FundStory = () => {
  const project = projects.find(p => p.id === 3);

  return (
    <div className={styles.projectContainer}>
      <h1 className={styles.projectTitle}>{project.title}</h1>
      <p className={styles.elevatorPitch}>{project.elevator_pitch}</p>
      
      <div className={styles.projectDetails}>
        <div className={styles.detailItem}>
          <h3>Duration:</h3>
          <p>{project.duration}</p>
        </div>
        <div className={styles.detailItem}>
          <h3>Team:</h3>
          <p>{project.team}</p>
        </div>
        <div className={styles.detailItem}>
          <h3>Team Size:</h3>
          <ul>
            {project.team_size.map((member, index) => (
              <li key={index}>{member}</li>
            ))}
          </ul>
        </div>
      </div>

      <h3>Technologies Used:</h3>
      <div className={styles.technologiesGrid}>
        {project.technologies.map((tech, index) => (
          <span key={index} className={styles.techIcon}>{tech}</span>
        ))}
      </div>

      <h3>Project Description:</h3>
      <p className={styles.projectDescription}>{project.description}</p>
    </div>
  );
};

export default FundStory;
