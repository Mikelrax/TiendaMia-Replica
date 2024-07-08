// CartProducts.js
import style from './CartProducts.module.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useState } from 'react';
interface CartProductProps {
    id: number;
    name: string;
    price: number;
    image: string;
}

export default function CartProducts({ id, name, price, image }: CartProductProps) {
    const [ counter, setCounter ] = useState(1);
    const handleClick = () => {
        setCounter(counter + 1);
    };
    return (
        <div className={style.products} id={id.toString()}>
            <div className={style.product}>
                <img src={image} alt={name} />
                <div className={style['product-details']}>
                    <h4>{name}</h4>
                    <p>Resolution: 1280 x 800 Wireless Technology: Wi-Fi Generation: 2nd gen Screen Type: LCD Storage: 16 GB Peso: 0.460 kg</p>
                    <div className={style['product-actions']}>
                        <div className={style["product-quantity"]}>
                            <button>-</button>
                            <input type="text" min="1" max="5" defaultValue="1"  />
                            <button>+</button>
                        </div>
                        <button><FavoriteBorderIcon className={style['favorite-icon']} /></button>
                        <button><DeleteOutlineIcon className={style['trash-icon']} /></button>
                    </div>
                </div>
                <div className={style['product-price']}>S/ {price}</div>
            </div>
            <hr />
        </div>
    );
}