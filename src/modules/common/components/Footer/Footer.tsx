import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import config from "../../../../../public/store-config.json";

const Footer = () => {
  const { footerLinks, logo } = config;
  return (
    <footer>
      <div id="footer" className={styles["footer-container"]}>
        <img className={styles["footer-logo"]} src={logo} alt="Logo" />
        {footerLinks.map((section, index) => (
          <ul key={index} className={styles["footer-ul"]}>
            <li className={styles["footer-main-item"]}>
              <Link className={styles["footer-a"]} to="#">
                {section.title}
              </Link>
            </li>
            {section.links.map((link, linkIndex) => (
              <li key={linkIndex} className={styles["footer-li"]}>
                <Link className={styles["footer-a"]} to="#">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
      <div className={styles["footer-copyright"]}>
        Curso de HTML + CSS 2023
      </div>
    </footer>
  );
};
export default Footer;
