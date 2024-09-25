"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Projects.module.scss";
import { projects } from "@/data/projects";
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

function ProjectCard({ title, url, elevator_pitch, duration, team, team_size, technologies }) {
  return (
    <Link href={`/projects/${url}`} className={styles.projectCard}>
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
          {technologies.map((tech, index) => {
            const IconComponent = technologyIcons[tech];
            return IconComponent ? (
              <IconComponent key={index} width={30} height={30} />
            ) : (
              <span key={index}>{tech}</span>
            );
          })}
        </div>
      </div>
    </Link>
  );
}

export default function Projects() {
  return (
    <div className={styles.projectsContainer}>
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
}
