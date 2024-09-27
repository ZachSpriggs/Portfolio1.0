import React from 'react';
import styles from '@/styles/Project.module.scss';


const Project = ({ project }) => {
  console.log("Rendering Project component, project:", project);
  
  if (!project) {
    return <div>Project data not available</div>;
  }


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
        <ul>
          {project.technologies.map((tech, index) => (
            <li key={index} className={styles.techIcon}>{tech}</li>
          ))}
        </ul>
      </div>

      <h3>Project Description:</h3>
      <p className={styles.projectDescription}>{project.description}</p>
    </div>
  );
};

export default Project;
