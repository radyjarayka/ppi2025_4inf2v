import styles from "./Footer.module.css";
import { Github } from "lucide-react";
import { Instagram } from "lucide-react";
import { MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        IFRN – Campus Macau
        <br />
        Curso Técnico em Informática
        <br />
        Programação para Internet 2025
      </div>
      <div className={styles.center}>Radyja Rayka</div>
      <div className={styles.right}>

        <a
        href="https://github.com/radyjarayka"
         target="_blank"
         rel="noopener noreferrer"
         className={styles.iconLink}
       >
         <Github size={20} />
       </a>

        <a
        href="https://www.instagram.com/radyja_rayka/"
         target="_blank"
         rel="noopener noreferrer"
         className={styles.iconLink}
       >
         <Instagram size={20} />
       </a>

<a
        href="https://web.whatsapp.com/"
         target="_blank"
         rel="noopener noreferrer"
         className={styles.iconLink}
       >
         <MessageCircle size={20} />
       </a>


        
      </div>
    </footer>
  );
}
