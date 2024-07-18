import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import { type SocialLinkProps } from "./NavBarTypes";

const SocialLink = ({ name, icon, link }: SocialLinkProps) => {
    return (
        <li id={name} className={styles["header-social-li"]}>
            <Link className={styles["header-a"]} to={link} target="_blank">
                <img
                    className={styles["header-social-img"]}
                    src={icon}
                    alt={name}
                />
            </Link>
        </li>
    );
};

export default SocialLink;