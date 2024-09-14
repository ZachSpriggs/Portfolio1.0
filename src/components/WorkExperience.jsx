import styles from "@/styles/WorkExperience.module.scss";

// function ExperienceCard({
//   title,
//   company,
//   technologies,
//   duration,
//   role,
//   termination,
// }) {
//   return (
//     <div className={styles.flipCard}>
//       <div className={styles.flipCardInner}>
//         <div className={styles.titleBar}>
//           <h3>{title}</h3>
//         </div>
//         <div className={styles.content}>
//           <p><strong>Company:</strong> {company}</p>
//           <p><strong>Technologies:</strong> {technologies.join(", ")}</p>
//           <p><strong>Time In Role:</strong> {duration}</p>
//           <p><strong>Employment Type:</strong> {role}</p>
//           <p><strong>Reason For Leaving:</strong> {termination || "N/A"}</p>
//         </div>
//         <div className={styles.footerBar}></div>
//       </div>
//     </div>
//   );
// }
export default function WorkExperience() {
  const jobs = [
    {
      title: "QA Engineer",
      company: "APS",
      duration: "Feb 2024 - Present",
    },
    {
      title: "Site Engineer",
      company: "DoorDash",
      duration: "Aug 2023 - January 2024",
    },
    {
      title: "Lead Full Stack Engineer",
      company: "Mama Restaurant Group",
      duration: "Nov 2021 - June 2023",
    },
    {
      title: "Mobile Developer",
      company: "VUniverse",
      duration: "May 2021 - November 2021",
    },
    {
      title: "Full Stack Engineer",
      company: "FundStory",
      duration: "May 2021 - November 2021",
    },
    {
      title: "Teaching Assistant",
      company: "Coding Dojo",
      duration: "February 2021 - June 2021",
    },
  ];
  return (
    <div className={styles.workExperienceWrapper}>
      <h2>Employment</h2>
      <div className={styles.workExperience}>
        {jobs.map((job, index) => (
          <div key={index}>
            <h3>{job.title}</h3>
            <h4>{job.company}</h4>
            <h5>{job.duration}</h5>
            <hr/>
          </div>
        ))}
      </div>
    </div>
  );
}
