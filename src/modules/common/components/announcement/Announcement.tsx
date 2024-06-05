import config from "../../../../../public/store-config.json";
import style from "./Announcement.module.css";

function Announcement() {
    const { Announcement } = config;

    return (

        <div className={style.announcement}>
            <div className={style.announcementImage}>
                <img src={Announcement[0].image} alt={Announcement[0].alt} />
            </div>
        </div>
    );
}

export default Announcement;