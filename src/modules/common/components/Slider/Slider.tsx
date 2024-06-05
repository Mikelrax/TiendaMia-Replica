// @ts-ignore 
import SliderRaw from "./SliderRaw";
import style from "./Slider.module.css";

const Slider = () => {
    return (
        <>
            <div className={style.sliderContainer}>
                <SliderRaw />
            </div>

        </>
    );
};

export default Slider;