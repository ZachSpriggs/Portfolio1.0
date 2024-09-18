"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/Projects.module.scss";
import { projects } from "@/data/projects";
import Link from 'next/link';
import NodeJS from "@/logos/nodejs.svg";
import Android from "@/logos/android.svg";
import Django from "@/logos/django.svg";
import Figma from "@/logos/figma.svg";
import Mongo from "@/logos/mongo.svg";
import Python from "@/logos/python.svg";
import ReactIcon from "@/logos/react.svg";
import Sass from "@/logos/sass.svg";
import Vue from "@/logos/vue.svg";
import Next from "@/logos/next.svg";
import SQL from "@/logos/sql.svg";
import Snowflake from "@/logos/snowflake.svg";

const technologyIcons = {
  NodeJS,
  Android,
  Django,
  Figma,
  Mongo,
  Python,
  ReactIcon,
  Sass,
  Vue,
  Next,
  SQL,
  Snowflake,
};

function ProjectCard({
  title,
  description,
  duration,
  technologies,
  elevator_pitch,
  team_size,
  team,
  id
}) {
  const projectData = { title, description, duration, technologies, elevator_pitch, team_size, team, id };
  const urlTitle = title.toLowerCase().replace(/\s+/g, '-');


  return (
    
    <div className={styles.projectCard}>
      <Link href={{ pathname: `/projects/${urlTitle}`, query: { project: JSON.stringify(projectData) } }}>
        <div className={styles.cardFront}>
          <div className={styles.titleBar}>
            <h3>{title}</h3>
          </div>
          <strong className={styles.elevatorPitch}>{elevator_pitch}</strong>
          <div className={styles.teamSize}>
            <strong>Time Line: {duration}</strong>
            <h4>{team} Project</h4>
            {team_size.map((member, index) => (
              <p key={index}>{member}</p>
            ))}
          </div>
          <div className={styles.technologiesGrid}>
            {technologies.map((tech, index) => (
              <Image
                key={index}
                src={technologyIcons[tech]}
                alt={tech}
                width={30}
                height={30}
              />
            ))}
          </div>
        </div>
        
      </Link>
      </div>
  );
}

export default function Projects() {
  return (
    <div className={styles.projectsContainer}>
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project}/>
      ))}
    </div>
  );
}
