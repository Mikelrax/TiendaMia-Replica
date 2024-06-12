import PurchaseProduct from "./PurchaseProduct/PurchaseProduct";
import styles from "./ProductDetails.module.css";
import PurchaseSlider from "./PurchaseSlider/PurchaseSlider";
import { useEffect, useState } from "react";
import getDataById from "../utils/getDataById";

export default function ProductDetails({ id }: { id: string | undefined }) {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            if (id) {
                const result = await getDataById(id) as any;
                setData(result);
            }
        };
        fetchData();
    }, [id]);

    console.log(data);

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.container}>
            <div className={styles["product-images"]}>
                <PurchaseSlider 
                    original={[data.image || "https://placehold.co/500x500"]}
                    thumbnail={[data.image || "https://placehold.co/500x500"]} 
                />
            </div>
            <div className={styles["product-details"]}>
                <h1>{data.name || "Apple MacBook Air 13.3\" Core i7 / 8GB / 128GB - Silver (Refurbished)"}</h1>
                <ul>
                    <li>Screen size: {data.screenSize || "13.3"}</li>
                    <li>Model: {data.model || "Macbook Air"}</li>
                    <li>Wireless Technology: {data.wirelessTechnology || "Wi-Fi"}</li>
                    <li>Maximum OS supported: {data.os || "macOS"}</li>
                    <li>RAM: {data.ram || "8 GB"}</li>
                    <li>Resolution: {data.resolution || "1440 x 900"}</li>
                    <li>Storage: {data.storage || "128 GB"}</li>
                    <li>Color Electronics: {data.color || "Silver"}</li>
                </ul>
                <p className={styles.note}>* Este producto es recertificado, renovado o refabricado. Esto significa que el mismo ha sido reacondicionado o reparado por el vendedor para lucir y funcionar correctamente. El producto puede venir en caja genérica.</p>
                <p className={styles.availability}>Disponibilidad: <span className={styles["in-stock"]}>{data.stockStatus || "En stock"}</span></p>
                <p>Marca: <span className={styles.brand}>{data.brand || "Apple"}</span></p>
                <p>Peso con empaque: <span className={styles.weight}>{data.weight || "1.520 kg"}</span></p>
                <p>Producto con devolución</p>
                <p>Producto de: <span className={styles["verified-seller"]}>{data.sellerStatus || "Vendedor verificado"}</span></p>
            </div>
            <div className={styles["product-purchase"]}>
                <PurchaseProduct />
            </div>
        </div>
    );
}