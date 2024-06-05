import styles from './ProductCard.module.css';
import { type Product } from './ProductCardTypes';

export default function MyProductCard({ product } : { product: Product }) {
    return (
        <div className={styles["product-card"]}>
            <img className={styles["product-image"]} src={product.image} alt={product.name} />
            <div className={styles["product-info"]}>
                <h3 className={styles["product-title"]}>{product.name}</h3>
                <p className={styles["product-description"]}><strong>{product.category}</strong></p> 
                <div className={styles["product-footer"]}>
                    <span className={styles["product-price"]}>S/.{product.price}</span>
                    <button className={styles["product-button"]}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}