import styles from "@/styles/WorkExperience.module.scss";

function ExperienceCard({
  title,
  company,
  technologies,
  duration,
  role,
  termination,
}) {
  return (
    <div className={styles.flipCard}>
      <div className={styles.flipCardInner}>
        <div className={styles.titleBar}>
          <h3>{title}</h3>
        </div>
        <div className={styles.content}>
          <p><strong>Company:</strong> {company}</p>
          <p><strong>Technologies:</strong> {technologies.join(", ")}</p>
          <p><strong>Time In Role:</strong> {duration}</p>
          <p><strong>Employment Type:</strong> {role}</p>
          <p><strong>Reason For Leaving:</strong> {termination || "N/A"}</p>
        </div>
        <div className={styles.footerBar}></div>
      </div>
    </div>
  );
}
export default function WorkExperience() {
  const jobs = [
    {
      title: "QA Engineer",
      company: "APS",
      technologies: ["C#", "SQL Server"],
      duration: "Feb 2024 - Present",
      role: "Part Time",
      termination: "",
    },
    {
      title: "Site Engineer",
      company: "DoorDash",
      technologies: ["Python", "Django", "SQL", "Snowflake", "Mode Analytics"],
      duration: "Aug 2023 - ",
      role: "Full Time",
      termination: "Lay Off",
    },
    {
      title: "Lead Full Stack Engineer",
      company: "Mama Restaurant Group",
      technologies: ["NodeJS", "Vue", "React", "Figma", "Express", "Mongo"],
      duration: "Nov 2021 - June 2023",
      role: "Full Time",
      termination: "Lay Off",
    },
    {
      title: "Mobile Developer",
      company: "VUniverse",
      technologies: ["React-Native", "Figma"],
      duration: "May 2021 - November 2021",
      role: "Contract",
      termination: "Contract ended",
    },
    {
      title: "Frontend Developer",
      company: "Barntools",
      technologies: ["React", "WordPress"],
      duration: "June 2021 - August 2021",
      role: "Contract",
      termination: "Contract ended",
    },
    {
      title: "Full Stack Engineer",
      company: "FundStory",
      technologies: [
        "React",
        "Express",
        "NodeJS",
        "Mongo",
        "Redux",
        "Figma",
        "Python",
      ],
      duration: "May 2021 - November 2021",
      role: "Full Time",
      termination: "New Full time position",
    },
    {
      title: "Teaching Assistant",
      company: "Coding Dojo",
      technologies: ["MERN", "Java/Springboot", "Python/Flask/Django"],
      duration: "February 2021 - June 2021",
      role: "Part Time",
      termination: "Better position",
    },
  ];
  return (
    <div className={styles.workExperienceWrapper}>
      <h2>Employment</h2>
      <div className={styles.workExperience}>
        {jobs.map((job, index) => (
          <ExperienceCard key={index} {...job} />
        ))}
      </div>
    </div>
  );
}
