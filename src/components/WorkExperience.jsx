import styles from "@/styles/WorkExperience.module.scss";

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
      title: "Lead Software Developer",
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
