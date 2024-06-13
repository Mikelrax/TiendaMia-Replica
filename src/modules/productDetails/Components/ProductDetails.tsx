import PurchaseProduct from "./PurchaseProduct/PurchaseProduct";
import styles from "./ProductDetails.module.css";
import PurchaseSlider from "./PurchaseSlider/PurchaseSlider";
import { useEffect, useState } from "react";
import getDataById from "../utils/getDataById";
import PurchaseInfo from "./PurchaseInfo/PurchaseInfo";

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
                <PurchaseInfo data={data} />
            </div>
            <div className={styles["product-purchase"]}>
                <PurchaseProduct id={data.id} price={data.price} verified={data.verified} stock={data.stock} />
            </div>
        </div>
    );
}