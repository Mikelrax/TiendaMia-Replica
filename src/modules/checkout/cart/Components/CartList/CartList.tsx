// CartList.js
import style from './CartList.module.css';
import CartProducts from '../CartProducts/CartProducts';
import CartPrice from '../CartPrice/CartPrice';

export default function CartList() {
    return (
        <div className={style.container}>
            <div className={style.dataContainer}>
                <div className={style.products}>
                    <div className={style['product-header']}>
                        <span className={style['delivery-info']}><center>Entrega: recibe estos productos todos juntos en un único paquete</center></span>
                    </div>
                    <CartProducts />
                    <CartProducts />
                    <CartProducts />
                    <CartProducts />
                    <CartProducts />
                    <CartProducts />
                    <CartProducts />
                </div>
                <CartPrice />
            </div>
        </div>
    );
}