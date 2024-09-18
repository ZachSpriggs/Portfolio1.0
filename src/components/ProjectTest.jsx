"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/Projects.module.scss";
import { projects } from "@/data/projects";
import Link from "next/link";
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

function ProjectCard({ project }) {
  const urlTitle = project.title.toLowerCase().replace(/\s+/g, "-");

  return (
    <Link href={`/projects/${urlTitle}`}>
      <div className={styles.projectCard}>
        <div className={styles.cardFront}>
          <div className={styles.titleBar}>
            <h3>{project.title}</h3>
          </div>
          <strong className={styles.elevatorPitch}>
            {project.elevator_pitch}
          </strong>
          <div className={styles.teamSize}>
            <strong>Time Line: {project.duration}</strong>
            <h4>{project.team} Project</h4>
            {project.team_size.map((member, index) => (
              <p key={index}>{member}</p>
            ))}
          </div>
          <div className={styles.technologiesGrid}>
            {project.technologies.map((tech, index) => (
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
      </div>
    </Link>
  );
}

export default function Projects() {
  return (
    <div className={styles.projectsContainer}>
      {projects.map((project) => (
        <ProjectCard project={project} key={project.id}/>
      ))}
    </div>
  );
}
