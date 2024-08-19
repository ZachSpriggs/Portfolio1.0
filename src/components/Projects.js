"use client";

import { useState, useRef, useEffect } from "react";
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

function ProjectCard({
  title,
  description,
  technologies,
  elevator_pitch,
  team_size,
  isActive,
  onFlip,
  index,
}) {

  const [isFlipped, setIsFlipped] = useState(false)
  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <div className={styles.projectCard} onClick={handleFlip}>
      <div className={`${styles.cardInner} ${isFlipped ? styles.flipped : ''}`}>
        <div className={`${styles.cardFace} ${styles.cardFront}`}>
          <h3>{title}</h3>
        </div>
        <div className={`${styles.cardFace} ${styles.cardBack}`}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [activeCardIndex, setActiveCardIndex] = useState(null);

  const handleFlip = (index) => {
    setActiveCardIndex(activeCardIndex === index ? null : index);
  };

  const projects = [
    {
      title: "Legacy codebase rewrite",
      elevator_pitch: "Rewrote vue codebase in react",
      description:
        "After many internal frustrations, we switch our CMS from WordPress to Plasmic. Once we made the switch, we realized how much bloat we had in our Vue codebase. Much of it was deprecated and the javascript was lacking clarity. Our team decided to rewrite the entire frontend in React.",
      team_size: ["Developer(s): Me", "UI/UX Designer", "Art Director"],
      technologies: [Vue, ReactIcon, Sass, Figma],
    },
    {
      title: "Mama Restaurant Group",
      elevator_pitch: "Rewrote vue codebase in react",
      description: "Full description of the project...",
      team_size: ["Developer(s): Me", "UI/UX Designer", "Art Director"],
      technologies: [NodeJS],
    },
    {
      title: "VUniverse",
      elevator_pitch: "Rewrote vue codebase in react",
      description: "Full description of the project...",
      team_size: ["Developer(s): Me", "UI/UX Designer", "Art Director"],
      technologies: [NodeJS],
    },
    {
      title: "FundStory",
      elevator_pitch: "Rewrote vue codebase in react",
      description: "Full description of the project...",
      team_size: ["Developer(s): Me", "UI/UX Designer", "Art Director"],
      technologies: [NodeJS],
    },
    {
      title: "SmartGoals",
      elevator_pitch: "Rewrote vue codebase in react",
      description: "Full description of the project...",
      team_size: ["Developer(s): Me", "UI/UX Designer", "Art Director"],
      technologies: [NodeJS],
    },
    {
      title: "Operations Analytics",
      elevator_pitch: "Rewrote vue codebase in react",
      description: "Full description of the project...",
      team_size: ["Developer(s): Me", "UI/UX Designer", "Art Director"],
      technologies: [NodeJS],
    },
    {
      title: "Wavy Skincare",
      elevator_pitch: "Rewrote vue codebase in react",
      description: "Full description of the project...",
      team_size: ["Developer(s): Me", "UI/UX Designer", "Art Director"],
      technologies: [NodeJS],
    },
    {
      title: "This website!",
      elevator_pitch: "Rewrote vue codebase in react",
      description: "Full description of the project...",
      team_size: ["Developer(s): Me", "UI/UX Designer", "Art Director"],
      technologies: [NodeJS],
    },
    // Add more projects as needed
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
  )
}