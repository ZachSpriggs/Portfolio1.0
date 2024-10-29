"use client";

import React, { useEffect } from "react";
import styles from "@/styles/Project.module.scss";
import Image from "next/image";

const Project = ({ project }) => {
  useEffect(() => window.document.body?.scrollTo(0, 0), []);

  if (!project) {
    return <div>Project data not available</div>;
  }

  return (
    <div className={styles.projectContainer}>
      <div data-nextjs-scroll-focus-boundary />
      <h1 className={styles.projectTitle}>{project.title}</h1>
      <p className={styles.elevatorPitch}>{project.elevator_pitch}</p>

      {project.links && (
        <div className={styles.projectLinks}>
          <h3>Links</h3>
          {project.links.website && (
            <p>
              <a
                href={project.links.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                Website
              </a>
            </p>
          )}
          {project.links.github && (
            <p>
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </p>
          )}
        </div>
      )}
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
      {project.pain_point && (
        <>
          <h3>Pain Point:</h3>
          <p className={styles.projectDescription}>{project.pain_point}</p>
          <hr />
        </>
      )}
      {project.solution && (
        <>
          <h3>Solution:</h3>
          <p className={styles.projectDescription}>{project.solution}</p>
          <hr />
        </>
      )}
      {project.takeaway && (
        <>
          <h3>Key Takeaway:</h3>
          <p className={styles.projectDescription}>{project.takeaway}</p>
          <hr />
        </>
      )}
      {project.image && (
        <>
          <h3>Image:</h3>
          <Image className={styles.projectImage} src={project.image} alt="project image" width={800} height={450} />
          <hr />
        </>
      )}
    </div>
  );
};

export default Project;
