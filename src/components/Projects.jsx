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
      description: `After many internal frustrations, we switch our CMS from WordPress to Plasmic. Once we made the switch, 
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
      description: `I came into this project late and had a good amount of code built out already. 
      Initially, this project was built in Vue but was done so without scalability in mind. Elements were hard coded
      that should have been components so my primary task was finalizing designs from Figma, as well as 
      making the code more scalable. Eventually this led to the project above, which was a full refactor of the code base. 
      `,
      team_size: ["Developer: Myself", "UI/UX Designer", "Art Director"],
      technologies: ["NodeJS", "Vue", "ReactIcon", "Sass", "Figma", "Mongo"],
      team: "Design Team(3)",
    },
    {
      title: "VUniverse",
      elevator_pitch:
        "Frontend Development for streaming service in React Native",
      duration: "20 Weeks",
      description: `Utlized Figma templates to create the frontend for a streaming service application with React-Native.
      I had no React-Native experience coming into this project, but using the documentation to teach myself, I was able to 
      get a final product pushed to the App and Google Play Store. Both were accepted and the app was live. My contract ended 
      before I got to see the finalized product, but this project taught me a lot about mobile development, as well as adopting 
      new technologies and how to approach learning a new framework/stack.
      `,
      team_size: ["Frontend: Myself", "Backend: Senior Developer"],
      technologies: ["ReactIcon", "Figma", "Sass"],
      team: "Dev Team(2)",
    },
    {
      title: "FundStory",
      elevator_pitch: "Financial Planning and Analysis software for Founders",
      duration: "24 Weeks",
      description: `Built out FP&A software that allowed startup founders to track their funding 
      progress, monthly recurring revenue, etc. and provide insights into next steps to raise 
      the next seed round. This was a full stack MERN project, using Redux for state management, 
      as well as Python to automate some of the daily tasks. 
      `,
      team_size: ["Full Stack: Myself", "Full Stack: Senior Engineer"],
      technologies: ["NodeJS", "ReactIcon", "Mongo", "Figma", "Sass", "Python"],
      team: "Dev Team(2)",
    },
    {
      title: "SmartGoals",
      elevator_pitch: "Goal tracking App in Android Studio with Java",
      duration: "1 Week",
      description: `This was a team project during my coding boot camp that I did with classmates. We had learned 
      Java during the boot camp, but decided to avoid the typical "inventory management" style apps that everyone else 
      built. We used Android Studio to build a basic goal tracking app with progress charts, users, and goals as our models. 
      We built out a basic database using SQLite. My biggest takeaway from this project was flushing out my understanding of 
      mobile development and it sparked an interest in mobile development that I've had since starting this app. 
      `,
      team_size: ["4 Full Stack Engineers"],
      technologies: ["Android", "SQL"],
      team: "Dev Team(4)",
    },
    {
      title: "Operations Analytics",
      elevator_pitch:
        "Metrics analysis and automation for Operations teams at DoorDash",
      duration: "4 Weeks",
      description: `Working closely with Local Operations teams at DoorDash, I wanted to take some of the manual
      tasks away from Operations Managers. I created an automated reporting system utilizing Django and SQL queries
      in Snowflake to visual metrics. By decreasing the time spent pulling, and visualizing metrics, OMs were 
      able to focus on what really mattered. This led to a roughly 30% positive shift in all metrics 
      across all sites.
      `,
      team_size: ["Developer(s): Myself"],
      technologies: ["Python", "SQL", "Snowflake", "Django"],
      team: "Solo",
    },
    {
      title: "Wavy Skincare",
      elevator_pitch: "E-Commerce website for passion project",
      duration: "2 Weeks",
      description: `My girlfriend absolutely loves creating. She loves art, plants, lotions, essential oils, etc.. She 
      recently started making her own skin care products for fun. Wanting to take it more seriously, she's been contemplating 
      selling them at farmers markets. Due to this, I used the MERN stack to create a quick ecommerce website utilizing Stripe for
      payment processing. As of now, this project is not live because she hasn't finalized her "formula". Expected to go live 
      one the products are fully finalized and ready to sell.  
      `,
      team_size: ["Developer/Designer: Myself"],
      technologies: ["NodeJS", "Mongo", "ReactIcon", "Figma", "Sass"],
      team: "Solo",
    },
    {
      title: "This website!",
      elevator_pitch: "My portfolio site",
      duration: "1 Day",
      description: `I finally decided to make my portfolio site. I've gone quite some time without one, but I wanted a central location
      to talk through some of my career and focus on more than what I can put in a bullet point on a resume. I created the design in Figma
      based off Neobrutalism styles. Simple frontend using NextJS, Sass for styles, and Figma for the wireframes/prototypes. 
      `,
      team_size: ["Developer/Designer: Myself"],
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
