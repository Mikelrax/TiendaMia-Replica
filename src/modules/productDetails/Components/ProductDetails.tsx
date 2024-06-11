import PurchaseProduct from "./PurchaseProduct/PurchaseProduct";
import styles from "./ProductDetails.module.css";

export default function ProductDetails() {
    return (
        <div className={styles.container}>
            <div className={styles["product-images"]}>
                <div className={styles["thumbnail-images"]}>
                    <img src="https://placehold.co/50x50" alt="thumbnail 1" />
                    <img src="https://placehold.co/50x50" alt="thumbnail 2" />
                    <img src="https://placehold.co/50x50" alt="thumbnail 3" />
                    <img src="https://placehold.co/50x50" alt="thumbnail 4" />
                </div>
                <div className={styles["main-image"]}>
                    <img src="https://placehold.co/300x200" alt="main product image" />
                </div>
            </div>
            <div className={styles["product-details"]}>
                <h1>Apple MacBook Air 13.3" Core i7 / 8GB / 128GB - Silver (Refurbished)</h1>
                <ul>
                    <li>Screen size: 13.3</li>
                    <li>Model: Macbook Air</li>
                    <li>Wireless Technology: Wi-Fi</li>
                    <li>Maximum OS supported: macOS</li>
                    <li>RAM: 8 GB</li>
                    <li>Resolution: 1440 x 900</li>
                    <li>Storage: 128 GB</li>
                    <li>Color Electronics: Silver</li>
                </ul>
                <p className={styles.note}>* Este producto es recertificado, renovado o refabricado. Esto significa que el mismo ha sido reacondicionado o reparado por el vendedor para lucir y funcionar correctamente. El producto puede venir en caja genérica.</p>
                <p className={styles.availability}>Disponibilidad: <span className={styles["in-stock"]}>En stock</span></p>
                <p>Marca: <span className={styles.brand}>Apple</span></p>
                <p>Peso con empaque: <span className={styles.weight}>1.520 kg</span></p>
                <p>Producto con devolución</p>
                <p>Producto de: <span className={styles["verified-seller"]}>Vendedor verificado</span></p>
            </div>
            <div className={styles["product-purchase"]}>
                <PurchaseProduct />
            </div>
        </div>

    )
}