import styles from "@/styles/WhoIAm.module.scss";

export default function WhoIAm() {
  return (
    <div className={styles.whoIAm}>
      <div className={styles.left}>
        <h1>
          Zach Spriggs
          <br />
          Software Engineer
        </h1>
        <div className={styles.description}>
          <p>
            Over the past 4 years, I&apos;ve had the opportunity to hone my
            skills across the full stack.
          </p>
          <ul>
            <li>Proficient in frontend, but my true passion lies in backend</li>
            <li>Python and Node are my go-to tools</li>
            <li>
              Well versed in Python and JavaScript, but proficient in Java,
              TypeScript, and C#
            </li>
            <li>Active Security Clearance</li>
          </ul>
          <p>
            While I can navigate the intricacies of user interfaces, I really
            thrive when diving into the logic and problem-solving of backend
            development. There&apos;s something deeply satisfying about optimizing
            processes and creating robust, scalable systems. <br/>If you&apos;re looking
            for a dedicated professional who can bridge the gap between frontend
            and backend, with a keen eye for efficient solutions, let&apos;s connect.
            I&apos;m always eager to take on new challenges and contribute to
            meaningful projects.
          </p>
        </div>
      </div>
    </div>
  );
}
