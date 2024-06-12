import { Favorite } from "@mui/icons-material";
import styles from "./PurchaseProduct.module.css";
import GradeIcon from '@mui/icons-material/Grade';
function PurchaseProduct() {
  return (
    <div className={styles["product-card"]}>
      <div className={styles["product-favorite"]}>
        <Favorite className={styles["favorite-icon"]} />
      </div>
      <div className={styles["price-section"]}>
        <p className={styles["original-price"]}>Precio: <s>S/ 1,864</s></p>
        <p className={styles["savings"]}>Ahorras: S/ 872 (50%)</p>
        <h2 className={styles["current-price"]}>S/ 989</h2>
        <button className={styles["free-shipping"]}>ENVÍO GRATIS</button>
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
        <input type="number" id="quantity" name="quantity" defaultValue="1" min="1" />
      </div>
      <div className={styles["button-section"]}>
        <button className={styles["buy-now"]}>Comprar</button>
        <button className={styles["add-to-cart"]}>Agregar al carrito</button>
      </div>
    </div>
  );
}

export default PurchaseProduct;

