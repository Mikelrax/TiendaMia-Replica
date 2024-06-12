// @ts-ignore
import RawSlider from "./RawSlider"
import styles from "./PurchaseSlider.module.css";

interface SliderProps {
    original: string[];
    thumbnail: string[];
}

const PurchaseSlider = ({ original = [], thumbnail = [] }: SliderProps) => {
    return (
        <>
            <div className={styles["slider-container"]}>
                <RawSlider img={original} thumbnail={thumbnail} />
            </div>
        </>
    );
}

export default PurchaseSlider;