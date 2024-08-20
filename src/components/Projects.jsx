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
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={styles.flipCard} onClick={handleFlip}>
      <div
        className={`${styles.flipCardInner} ${isFlipped ? styles.flipped : ""}`}
      >
        <div className={styles.flipCardFront}>
          <div className={styles.titleBar}>
            <h3>{title}</h3>
          </div>
          <strong className={styles.elevatorPitch}>{elevator_pitch}</strong>
          <strong>Time Line: {duration}</strong>
          <div className={styles.teamSize}>
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
        <div className={styles.flipCardBack}>
          <h3>{title}</h3>
          <strong>{description}</strong>
          
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [viewCard, setViewCard] = useState(false);

  const handleCards = () => {
    setViewCard(!viewCard);
  };

  const projects = [
    {
      title: "Legacy codebase rewrite",
      elevator_pitch: "Rewrote legacy Vue codebase in React",
      duration: "6 Weeks",
      description: 
        `After many internal frustrations, we switch our CMS from WordPress to Plasmic. Once we made the switch, 
        we realized how much bloat we had in our Vue codebase. Much of it was deprecated and 
        the javascript was lacking clarity. Our team decided to rewrite the entire frontend in React.
        I had to maintain our current Vue codebase and make sure new features were up to date, while simultaneously
        reworking each component into React.`,
      team_size: ["Developer: Myself"],
      technologies: ["Vue", "ReactIcon", "Sass", "Figma"],
      team: "Solo",
    },
    {
      title: "Mama Restaurant Group",
      elevator_pitch: "Built website(s) for restaurant group ",
      duration: "16 Weeks",
      description: `After many internal frustrations, we switch our CMS from WordPress to Plasmic. Once we made the switch, 
        we realized how much bloat we had in our Vue codebase. Much of it was deprecated and 
        the javascript was lacking clarity. Our team decided to rewrite the entire frontend in React.`,
      team_size: ["Developer: Myself", "UI/UX Designer", "Art Director"],
      technologies: ["NodeJS", "Vue", "ReactIcon", "Sass", "Figma", "Mongo"],
      team: "Design Team(3)",
    },
    {
      title: "VUniverse",
      elevator_pitch: "Rewrote vue codebase in react",
      duration: "6 Weeks",
      description: `After many internal frustrations, we switch our CMS from WordPress to Plasmic. Once we made the switch, 
        we realized how much bloat we had in our Vue codebase. Much of it was deprecated and 
        the javascript was lacking clarity. Our team decided to rewrite the entire frontend in React.`,
      team_size: ["Frontend: Me", "Backend: Senior Developer"],
      technologies: ["ReactIcon", "Figma", "Sass"],
      team: "Dev Team(2)",
    },
    {
      title: "FundStory",
      elevator_pitch: "Rewrote vue codebase in react",
      duration: "6 Weeks",
      description: `After many internal frustrations, we switch our CMS from WordPress to Plasmic. Once we made the switch, 
        we realized how much bloat we had in our Vue codebase. Much of it was deprecated and 
        the javascript was lacking clarity. Our team decided to rewrite the entire frontend in React.`,
      team_size: ["Full Stack: Me", "Full Stack: Senior Engineer"],
      technologies: ["NodeJS", "ReactIcon", "Mongo", "Figma", "Sass", "Python"],
      team: "Dev Team(2)",
    },
    {
      title: "SmartGoals",
      elevator_pitch: "Rewrote vue codebase in react",
      duration: "6 Weeks",
      description: `After many internal frustrations, we switch our CMS from WordPress to Plasmic. Once we made the switch, 
        we realized how much bloat we had in our Vue codebase. Much of it was deprecated and 
        the javascript was lacking clarity. Our team decided to rewrite the entire frontend in React.`,
      team_size: ["4 Full Stack Engineers"],
      technologies: ["Android", "SQL"],
      team: "Dev Team(4)",
    },
    {
      title: "Operations Analytics",
      elevator_pitch: "Rewrote vue codebase in react",
      duration: "6 Weeks",
      description: `After many internal frustrations, we switch our CMS from WordPress to Plasmic. Once we made the switch, 
        we realized how much bloat we had in our Vue codebase. Much of it was deprecated and 
        the javascript was lacking clarity. Our team decided to rewrite the entire frontend in React.`,
      team_size: ["Developer(s): Me", "UI/UX Designer", "Art Director"],
      technologies: ["Python", "SQL", "Snowflake", "Django"],
      team: "Solo",
    },
    {
      title: "Wavy Skincare",
      elevator_pitch: "Rewrote vue codebase in react",
      duration: "6 Weeks",
      description: `After many internal frustrations, we switch our CMS from WordPress to Plasmic. Once we made the switch, 
        we realized how much bloat we had in our Vue codebase. Much of it was deprecated and 
        the javascript was lacking clarity. Our team decided to rewrite the entire frontend in React.`,
      team_size: ["Developer(s): Me", "UI/UX Designer", "Art Director"],
      technologies: ["NodeJS", "Mongo", "ReactIcon", "Figma", "Sass"],
      team: "Solo",
    },
    {
      title: "This website!",
      elevator_pitch: "Rewrote vue codebase in react",
      duration: "6 Weeks",
      description: `After many internal frustrations, we switch our CMS from WordPress to Plasmic. Once we made the switch, 
        we realized how much bloat we had in our Vue codebase. Much of it was deprecated and 
        the javascript was lacking clarity. Our team decided to rewrite the entire frontend in React.`,
      team_size: ["Developer(s): Me", "UI/UX Designer", "Art Director"],
      technologies: ["Next", "Figma", "Sass"],
      team: "Solo",
    },
  ];

  return (
    <div className={styles.section}>
      <h2>Projects</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
