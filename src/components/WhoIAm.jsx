import styles from "@/styles/WhoIAm.module.scss";
import Image from "next/image";
import Pic from "../pictures/White Shirt.jpeg"

export default function WhoIAm() {
  return (
    <div className={styles.whoIAm}>
      <div className={styles.left}>
        <h2>Zach Spriggs - Software Engineer</h2>
        <p>This is the Who I Am section.</p>
      </div>
      <div className={styles.right}>
        <Image className={styles.Image} src={Pic} width={500} height={600} loading="lazy" alt="Picture of Zach"/>
      </div>
    </div>
  );
}
