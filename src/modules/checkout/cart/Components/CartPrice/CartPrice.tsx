// CartPrice.js
import CodeDiscount from '../CodeDiscount/CodeDiscount';
import style from './CartPrice.module.css';
export default function CartPrice() {
    return (
        <div className={style['order-summary']}>
            <h3>Resumen del pedido</h3>
            <div className={style['order-details']}>
                <p>Productos de USA</p>
                <p>Factura en Estados Unidos <span>S/ 512</span></p>
                <p>Productos <span>S/ 512</span></p>
                <p>Envío a Miami <span>Gratis</span></p>
                <p>Tarifa de Procesamiento <span>S/ 51</span></p>
                <p>Costo por kilo (1.14 kg) <span>S/ 104</span></p>
            </div>
            <div className={style.subtotal}>
                <p>Subtotal <span>S/ 667</span></p>
            </div>
            <div className={style.discount}>
                <p>$10 OFF en tu primera compra con 10-CIUDADANO</p>
            </div>
            <button className={style['checkout-button']}>Finalizar compra</button>
            <button className={style['continue-button']}>Continúa comprando y ahorra en tu envío</button>
            <CodeDiscount />
            <div className={style.guarantee}>
                <p>Garantía de Entrega</p>
                <p>Todas tus compras tienen garantía de entrega</p>
                <a href="#">Saber más</a>
            </div>
        </div>
    );
}
