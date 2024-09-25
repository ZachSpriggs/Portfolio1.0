import styles from "@/styles/Contact.module.scss";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <h2>Contact</h2>
      <div className={styles.contactGrid}>
        <div className={styles.contactCard}>
          <FaLinkedin size={50} style={{ marginBottom: "10px" }} />
          <a href="https://www.linkedin.com/in/zachspriggs/" target="_blank">
            LinkedIn
          </a>
        </div>
        <div className={styles.contactCard}>
          <FaGithub size={50} style={{ marginBottom: "10px"}} />
          <a href="https://github.com/ZachSpriggs" target="_blank">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
