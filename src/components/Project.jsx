'use client'

import React, { useEffect } from "react";
import styles from "@/styles/Project.module.scss";

const Project = ({ project }) => {
  useEffect(() => window.document.body?.scrollTo(0,0), []);

  if (!project) {
    return <div>Project data not available</div>;
  }

  return (
    <div className={styles.projectContainer}>
      <div data-nextjs-scroll-focus-boundary />
      <h1 className={styles.projectTitle}>{project.title}</h1>
      <p className={styles.elevatorPitch}>{project.elevator_pitch}</p>

      <h3>Technologies Used:</h3>
      <div className={styles.technologiesGrid}>
        {project.tech_stack.map((tech, index) => (
          <span key={index} className={styles.techIcon}>
            {tech}
          </span>
        ))}
      </div>
      <hr />
      <h3>Project Description:</h3>
      <p className={styles.projectDescription}>{project.description}</p>
      <hr />
      <h3>Pain Point:</h3>
      <p className={styles.projectDescription}>{project.pain_point}</p>
      <hr />
      <h3>Solution:</h3>
      <p className={styles.projectDescription}>{project.solution}</p>
      <hr />
      <h3>Key Takeaway:</h3>
      <p className={styles.projectDescription}>{project.takeaway}</p>
      <hr />
    </div>
  );
};

export default Project;
