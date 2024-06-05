import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
const Logo = ( {logo}: {logo: string}) => {
    return (
        <Link to="/" className={styles["header-logo"]}>
            <img
                className={styles["header-logo-img"]}
                src={logo}
                width="218"
                alt="Logo store"
            />
        </Link>
    );
};

export default Logo;