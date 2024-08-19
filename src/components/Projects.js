"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/Projects.module.scss";
import NodeJS from "@/logos/nodejs.svg";
import Android from "@/logos/android.svg";
import Django from "@/logos/django.svg";
import Figma from "@/logos/figma.svg";
import Mongo from "@/logos/mongo.svg";
import Python from "@/logos/Python.svg";
import ReactIcon from "@/logos/react.svg";
import Sass from "@/logos/sass.svg";
import Vue from "@/logos/vue.svg";
import Next from "@/logos/next.svg";
import SQL from "@/logos/sql.svg";
import Snowflake from "@/logos/snowflake.svg";

const technologyIcons = {
  NodeJS, Android, Django, Figma, Mongo, Python, ReactIcon, Sass, Vue, Next, SQL, Snowflake
};

function ProjectCard({
  title,
  description,
  technologies,
  elevator_pitch,
  team_size,
  team
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={styles.flipCard} onClick={handleFlip}>
      <div className={`${styles.flipCardInner} ${isFlipped ? styles.flipped : ''}`}>
        <div className={styles.flipCardFront}>
          <div className={styles.titleBar}>
            <h3>{title}</h3>
          </div>
          <p className={styles.elevatorPitch}>{elevator_pitch}</p>
          <div className={styles.technologiesGrid}>
            {technologies.map((tech, index) => (
              <Image key={index} src={technologyIcons[tech]} alt={tech} width={30} height={30} />
            ))}
          </div>
        </div>
        <div className={styles.flipCardBack}>
          <h3>{title}</h3>
          <p>{description}</p>
          <div className={styles.teamSize}>
            <h4>{team} Project</h4>
            {team_size.map((member, index) => (
              <p key={index}>{member}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const projects = [
    {
      title: "Legacy codebase rewrite",
      elevator_pitch: "Rewrote vue codebase in react",
      description:
        "After many internal frustrations, we switch our CMS from WordPress to Plasmic. Once we made the switch, we realized how much bloat we had in our Vue codebase. Much of it was deprecated and the javascript was lacking clarity. Our team decided to rewrite the entire frontend in React.",
      team_size: ["Developer: Me"],
      technologies: ["Vue", "ReactIcon", "Sass", "Figma"],
      team: "Solo",
    },
    {
      title: "Mama Restaurant Group",
      elevator_pitch: "Rewrote vue codebase in react",
      description: "Full description of the project...",
      team_size: ["Developer: Me", "UI/UX Designer", "Art Director"],
      technologies: [NodeJS],
      team: "Design Team(3)",
    },
    {
      title: "VUniverse",
      elevator_pitch: "Rewrote vue codebase in react",
      description: "Full description of the project...",
      team_size: ["Frontend: Me", "Backend: Senior Developer"],
      technologies: [NodeJS],
      team: "Dev Team(2)",
    },
    {
      title: "FundStory",
      elevator_pitch: "Rewrote vue codebase in react",
      description: "Full description of the project...",
      team_size: ["Full Stack: Me", "Full Stack: Senior Engineer"],
      technologies: [NodeJS],
      team: "Dev Team(2)",
    },
    {
      title: "SmartGoals",
      elevator_pitch: "Rewrote vue codebase in react",
      description: "Full description of the project...",
      team_size: [""],
      technologies: [NodeJS],
      team: "Dev Team(4)",
    },
    {
      title: "Operations Analytics",
      elevator_pitch: "Rewrote vue codebase in react",
      description: "Full description of the project...",
      team_size: ["Developer(s): Me", "UI/UX Designer", "Art Director"],
      technologies: [NodeJS],
      team: "Solo",
    },
    {
      title: "Wavy Skincare",
      elevator_pitch: "Rewrote vue codebase in react",
      description: "Full description of the project...",
      team_size: ["Developer(s): Me", "UI/UX Designer", "Art Director"],
      technologies: [NodeJS],
      team: "Solo",
    },
    {
      title: "This website!",
      elevator_pitch: "Rewrote vue codebase in react",
      description: "Full description of the project...",
      team_size: ["Developer(s): Me", "UI/UX Designer", "Art Director"],
      technologies: [NodeJS],
      team: "Solo",
    },

  ];

  return (
    <div className={styles.section}>
      <h2>Projects</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <ProjectCard 
            key={index} 
            {...project} 
          />
        ))}
      </div>
    </div>
  );
}