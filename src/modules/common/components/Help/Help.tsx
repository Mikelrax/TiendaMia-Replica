import { AssignmentReturn, Engineering, MedicalInformation, MonitorSharp } from "@mui/icons-material";
import styles from "./Help.module.css";
import { Link } from "react-router-dom";

const Helper = () => {
    const styleIcons = {
        width: "60px", 
        height: "auto"
    };

    return (
        <>
            <div className={styles.container}>
                <h2>
                    Además tienes estas opciones adicionales a tu compra hecha en
                    <span className={styles.highlight}> <Link to={"/"} style={{textDecoration: "none", color: "red"}}> Tiendamia</Link></span>
                </h2>
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <Engineering style={{...styleIcons}} />
                        <p>¿Necesitas el servicio de instalación para tus productos?</p>
                        <a href="#">Más información</a>
                    </div>
                    <div className={styles.card}>
                        <AssignmentReturn style={{...styleIcons}} />
                        <p>¿Deseas realizar un cambio o devolución de producto?</p>
                        <a href="#">Ver más</a>
                    </div>
                    <div className={styles.card}>
                        <MonitorSharp style={{...styleIcons}} />
                        <p>Los envíos de tus pedidos son monitoreados por Beetrack</p>
                        <a href="#">Tiendamia es garantía</a>
                    </div>
                    <div className={styles.card}>
                        <MedicalInformation style={{...styleIcons}} />
                        <p>Contamos con excelentes protocolos de Bioseguridad</p>
                        <a href="#">Descúbrelos aquí</a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Helper;