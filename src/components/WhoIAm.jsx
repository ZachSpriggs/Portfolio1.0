import styles from "@/styles/WhoIAm.module.scss";
import Image from "next/image";
import Pic from "../pictures/White Shirt.jpeg"

export default function WhoIAm() {
  return (
    <div className={styles.whoIAm}>
      <div className={styles.left}>
        <h2>Zach Spriggs - Software Engineer</h2>
        <h4>I might be just who you&apos;re looking for</h4>
        <p>With ~4 years of experience in Software Development,
          I&apos;ve grown quite comfortable in frontend development, however
          my preference is backend utilizing Python or Node 
          because of the problem solving involved. I&apos;m most 
          familiar with Javascript and Python, but am comfortable in Java, 
          C#, and Typescript. I also have an active secret security clearance.
        </p>
      </div>
      <div className={styles.right}>
        <Image className={styles.Image} src={Pic} width={500} height={600} loading="lazy" alt="Picture of Zach"/>
      </div>
    </div>
  );
}
