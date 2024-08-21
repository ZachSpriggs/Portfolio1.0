import styles from '@/styles/WorkExperience.module.scss'


function experienceCard(title, company, technologies, duration, role, termination) {

  return (
    <div>

    </div>
  )
};
export default function WorkExperience() {
  const jobs = [
    {
      title: "QA Engineer",
      company: "APS",
      technologies: ["C#", "SQL Server"],
      duration: "Feb 2024 - Present",
      role: "Part Time",
      termination: ""
    },
    {
      title: "Site Engineer",
      company: "DoorDash",
      technologies: ["Python", "Django", "SQL", "Snowflake", "Mode Analytics"],
      duration: "Aug 2023 - ",
      role: "Full Time",
      termination: "Lay Off"
    },
    {
      title: "Lead Full Stack Engineer",
      company: "Mama Restaurant Group",
      technologies: ["NodeJS", "Vue", "React", "Figma", "Express", "Mongo"],
      duration: "Nov 2021 - June 2023",
      role: "Full Time",
      termination: "Lay Off"
    },
    {
      title: "Mobile Developer",
      company: "VUniverse",
      technologies: ["React-Native", "Figma"],
      duration: "May 2021 - November 2021",
      role: "Contract",
      termination: "Contract ended"
    },
    {
      title: "Web Developer",
      company: "Barntools",
      technologies: ["React", "WordPress"],
      duration: "June 2021 - August 2021",
      role: "Contract",
      termination: "Contract ended"
    },
    {
      title: "Full Stack Engineer",
      company: "FundStory",
      technologies: ["React", "Express", "NodeJS", "Mongo", "Redux", "Figma", "Python"],
      duration: "May 2021 - November 2021",
      role: "Full Time",
      termination: "New Full time position"
    },
    {
      title: "Teaching Assistant",
      company: "Coding Dojo",
      technologies: ["MERN", "Java/Springboot", "Python/Flask/Django"],
      duration: "February 2021 - June 2021",
      role: "Part Time",
      termination: "Better position"
    },
  ]
  return (
    <div className={styles.workExperience}>
      <h2>Employment</h2>
      {/* {jobs.map((job) => {
        <ul>
        <li>{job.title}</li>
        <li>{job.company}</li>
        {jobs.technologies.map((tech) => {
          <li>{tech}</li>
        })}
        <li>{job.duration}</li>
        <li>{job.role}</li>
        <li>{job.termination}</li>
        </ul>
      })} */}
    </div>
  )
}