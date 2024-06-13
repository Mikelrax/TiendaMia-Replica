import style from './Cart.module.css';

export default function CartList() {
    return (
        <div className={style.container}>
            <div className={style.products}>
                <div className={style['product-header']}>
                    <span className={style.flag}>🇺🇸</span>
                    <span>Productos de USA</span>
                    <span className={style['delivery-info']}>Entrega: recibe estos productos todos juntos en un único paquete</span>
                </div>
                <div className={style.product}>
                    <img src="https://placehold.co/100x100" alt="Lenovo Tab M8 Tablet" />
                    <div className={style['product-details']}>
                        <h4>Lenovo Tab M8 Tablet, 8" HD Android Tablet, Quad-Core Processor, 2GHZ, 16GB...</h4>
                        <p>Resolution: 1280 x 800 Wireless Technology: Wi-Fi Generation: 2nd gen Screen Type: LCD Storage: 16 GB Peso: 0.460 kg</p>
                        <div className={style['product-actions']}>
                            <button>-</button>
                            <span>1</span>
                            <button>+</button>
                            <button>❤️</button>
                            <button>🗑️</button>
                        </div>
                    </div>
                    <div className={style['product-price']}>S/ 372</div>
                </div>
                <div className={style.product}>
                    <img src="https://placehold.co/100x100" alt="Stanley Quencher H2.0 FlowState Insulated Thermal Mug 40 oz. Orchid" />
                    <div className={style['product-details']}>
                        <h4>Stanley Quencher H2.0 FlowState Insulated Thermal Mug 40 oz. Orchid</h4>
                        <p>Color: Purple Material: Stainless Steel Capacity: 40 oz Peso: 0.680 kg</p>
                        <div className={style['product-actions']}>
                            <button>-</button>
                            <span>1</span>
                            <button>+</button>
                            <button>❤️</button>
                            <button>🗑️</button>
                        </div>
                    </div>
                    <div className={style['product-price']}>S/ 140</div>
                </div>
                <div className={style['delivery-time']}>
                    <span>Recibe entre 5 y 10 días hábiles seleccionando envío</span>
                    <span>🚀Express</span>
                </div>
            </div>
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
                <div className={style.coupon}>
                    <p>¿Tienes un cupón de descuento?</p>
                    <input type="text" placeholder="Digita el código de tu cupón aquí" />
                    <button>aplicar</button>
                </div>
                <div className={style.guarantee}>
                    <p>Garantía de Entrega</p>
                    <p>Todas tus compras tienen garantía de entrega</p>
                    <a href="#">Saber más</a>
                </div>
            </div>
        </div>
    )
}
