import { Favorite } from "@mui/icons-material";
import styles from "./PurchaseProduct.module.css";
import GradeIcon from '@mui/icons-material/Grade';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import useFavorite from "../../Hooks/useFavorite";

interface PurchaseProductProps {
  id: number;
  price: number;
  verified: boolean;
  stock: number;
}

function PurchaseProduct({ id, price, verified, stock }: PurchaseProductProps) {

  console.log(id, price, verified, stock);

  const checkStock = stock === undefined || stock === 0;

  const { favorite, toggleFavorite, loading } = useFavorite(id);
  console.log(favorite)
  return (
    <div className={styles["product-card"]}>
      <div className={styles["product-favorite"]}>
        <button onClick={toggleFavorite} disabled={loading} className={styles["favorite-button"]}>
          {favorite ?
            <Favorite className={styles["favorite-icon"]} />
            :
            <FavoriteBorderIcon className={styles["favorite-icon"] + " " + styles["favorite-icon-loading"]} />
          }
        </button>
      </div>
      <div className={styles["price-section"]}>
        <p className={styles["original-price"]}>Precio: <s>S/ {price * 2}</s></p>
        <p className={styles["savings"]}>Ahorras: S/ {price * 2 - price} (50%)</p>
        <h2 className={styles["current-price"]}>S/ {price}</h2>
        <button className={styles["free-shipping"]}>{verified ? "ENVÍO GRATIS" : "ENVÍO DIRECTO"}</button>
      </div>
      <div className={styles["product-info"]}>
        <p><GradeIcon style={{ color: "red", paddingTop: "5px" }} /> Este producto tiene Garantía de Entrega</p>
        <p><img src="https://placehold.co/20x20" alt="Cart" /> Agrega el producto al carrito para conocer los costos de envío</p>
        <p><img src="https://placehold.co/20x20" alt="Shipping" /> Recibe entre 2 y 5 días hábiles seleccionando envío Súper Express</p>
        <p><img src="https://placehold.co/20x20" alt="Discount" /> $10 OFF en tu primera compra con 10-CIUDADANO</p>
        <p><img src="https://placehold.co/20x20" alt="Discount" /> <strong>Producto sin impuestos en tu país</strong></p>
      </div>
      <div className={styles["quantity-section"]}>
        <label htmlFor="quantity">Cantidad:</label>
        <input type="number" id="quantity" name="quantity" defaultValue="1" min="1" max={stock} disabled={checkStock} />
      </div>
      <div className={styles["button-section"]}>
        <button className={styles["buy-now"]} disabled={checkStock}>Comprar</button>
        <button className={styles["add-to-cart"]} disabled={checkStock}>Agregar al carrito</button>
      </div>
    </div>
  );
}

export default PurchaseProduct;

