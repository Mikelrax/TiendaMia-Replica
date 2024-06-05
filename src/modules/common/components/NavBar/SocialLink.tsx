import styles from "./NavBar.module.css";
import { type SocialLinkProps } from "./NavBarTypes";

const SocialLink = ({ name, icon, link }: SocialLinkProps) => {
    return (
        <li id={name} className={styles["header-social-li"]}>
            <a className={styles["header-a"]} href={link}>
                <img
                    className={styles["header-social-img"]}
                    src={icon}
                    alt={name}
                />
            </a>
        </li>
    );
};

export default SocialLink;