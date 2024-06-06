import { ReactNode } from "react";
import styles from "./ButtonPag.module.css";

interface buttonTypes {
    children: ReactNode;
}

const ButtonPag = ({ children }: buttonTypes) : JSX.Element => {
    return (
        <button className={styles["page-btn"]}>{children}</button>
    );
};

export default ButtonPag;