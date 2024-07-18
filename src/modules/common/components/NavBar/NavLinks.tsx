import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

type Props = {
  title: string;
  link: string;
};

const NavLinks = ({ title, link }: Props) => {
  return (
    <li className={styles["nav-li"]}>
      <Link className={styles["nav-a"] + " " + styles["nav-link"]} to={link} target={title === "Mis pedidos" ? "_blank" : ""}>
        {title}
      </Link>
    </li>
  );
};

export default NavLinks;
