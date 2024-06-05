import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";

type Props = {
  id: number;
  title: string;
  description: string;
  images: string[];
  price: number;
  onsale: boolean;
};

const ProductCard = ({
  id,
  title,
  images,
  description,
  price,
  onsale,
}: Props) => {
  return (
    <Link className={styles["product-card"]} to={`/details/${id}`}>
      <img className={styles["product-img"]} src={images[0]} alt={title} />
      <div className={styles["product-info"]}>
        <span className={styles["product-title"]}>{title}</span>
        <span className={styles["product-description"]}>{description}</span>
        <div className={styles["product-price-block"]}>
          <span className={styles["product-price"]}>$ {price}</span>
          <span className={styles["product-discount"]}>
            {onsale && "50% Off"}
          </span>
        </div>
        <div className={styles["product-tax-policy"]}>
          Incluye impuesto País y percepción AFIP
        </div>
      </div>
    </Link>
    
  );
};

export default ProductCard;
