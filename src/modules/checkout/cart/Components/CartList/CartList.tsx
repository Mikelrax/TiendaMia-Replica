// CartList.js
import style from './CartList.module.css';
import CartProducts from '../CartProducts/CartProducts';
import CartPrice from '../CartPrice/CartPrice';
import useAddCart from '../../Hooks/useAddCart';
import getDataById from '../../../../productDetails/utils/getDataById';
import { useEffect, useState } from 'react';

export default function CartList() {
    const { getCartItems } = useAddCart(1);
    const [products, setProducts] = useState<any[]>([]);
    const cartItems = getCartItems();

    const getProducts = async () => {
        try { 
            const productsData = await Promise.all(cartItems.map((cartItem: number) => getDataById(cartItem)));
            setProducts(productsData);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    useEffect(() => {
        getProducts();
    }, [cartItems]);

    return (
        <div className={style.container}>
            <div className={style.dataContainer}>
                <div className={style.products}>
                    <div className={style['product-header']}>
                        <span className={style['delivery-info']}><center>Entrega: recibe estos productos todos juntos en un único paquete<hr></hr></center></span>
                    </div>
                    {products.map((product) => (
                        <CartProducts
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            price={product.price}
                            image={product.image}
                            note={product.note}
                        />
                    ))}
                </div>
                <CartPrice />
            </div>
        </div>
    );
}