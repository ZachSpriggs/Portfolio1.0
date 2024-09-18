import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Projects.module.scss';

const Vuniverse = () => {
  const project = {
    title: "Vuniverse",
    image: "/path/to/vuniverse-image.jpg", // Replace with actual image path
    elevator_pitch: "A comprehensive Vue.js learning platform",
    duration: "3 months",
    team: "Solo",
    team_size: ["Full-stack Developer"],
    technologies: ["Vue.js", "Vuex", "Vue Router", "Node.js", "Express", "MongoDB"],
    description: "Vuniverse is an interactive learning platform designed to help developers master Vue.js and its ecosystem. It features hands-on tutorials, real-time coding challenges, and a community forum for knowledge sharing."
  };

  return (
    <div className={styles.projectContainer}>
      <h1 className={styles.projectTitle}>{project.title}</h1>
      <Image src={project.image} alt={project.title} width={800} height={480} className={styles.projectImage} />
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
          <h3>Role:</h3>
          <ul>
            {project.team_size.map((role, index) => (
              <li key={index}>{role}</li>
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

export default Vuniverse;
