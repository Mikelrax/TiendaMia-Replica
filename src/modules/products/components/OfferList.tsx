import styles from "./OfferList.module.css";
import categoriesData from "../../../../public/products-categories.json";
import useRandomProducts from "../hooks/useRandomProducts";
import TheProductCard from "../../common/components/ProductCard/TheProductCard";
import products from "../../../../public/products-store.json";

const categories: string[] = categoriesData.categories;
type Category = typeof categories[number];

interface OfferListProps {
    categorie: Category;
}



const OfferList = ({ categorie }: OfferListProps) => {

    const offersLength = 5;
    var selectedProducts = useRandomProducts(categorie, offersLength);
    if(categorie === "all"){selectedProducts = products as any[];}
    const checkSelectedProducts = selectedProducts ? selectedProducts.length : 0;
    return (
        <div className={styles.offersContainer} style={{ display: `${checkSelectedProducts > 0 ? "" : "none"}` }}>
            <div className={styles.offersHeader} style={{ display: `${categorie== "none" ? "all" : ""}` }}> 
                <h2 className={styles.offersTitle}>{categorie} <small className={styles.offersSubtitle}><a href="#">ver más</a></small></h2>  
            </div>
            {selectedProducts?.map((product, index) => (
                <div key={index} className={styles.productCard}>
                    <TheProductCard product={product} />
                </div>
            ))}
        </div>
    );
};

export default OfferList;