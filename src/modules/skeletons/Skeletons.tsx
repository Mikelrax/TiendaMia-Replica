import { useImage } from "./Hooks/useImage";
import styles from "./Skeletons.module.css"

export const ProductCardSearchSkeleton = () => {
    return (
        <div className={styles["card"]}>
            <div className={styles["image-skeleton"]}></div>
            <div className={styles.content}>
                <div className={styles["title-skeleton"]}></div>
                <div className={styles["description-skeleton"]}></div>
                <div className={styles["price-skeleton"]}></div>
                <div className={styles["rating-skeleton"]}></div>
            </div>
        </div>
    )
}

export const ProductImageSkeleton = () => {
    return (
        <div className={styles["product-image"]}>
            <div className={styles["image-skeleton"]}></div>
        </div>
    )
}

export function ImageWithSkeleton({ src, alt } : { src: string, alt: string }) {
    const { loaded, error } = useImage(src);

    if (error) {
        return <div>Error loading image: {alt}</div>;
    }

    return (
        <div>
            {!loaded && <ProductImageSkeleton />}
            {loaded && <img src={src} alt={alt} />}
        </div>
    );
}