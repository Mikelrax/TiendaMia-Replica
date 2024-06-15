// CartProducts.js
import style from './CartProducts.module.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function CartProducts() {
    return (
        <div className={style.products}>
            <div className={style.product}>
                <img src="https://placehold.co/100x100" alt="Lenovo Tab M8 Tablet" />
                <div className={style['product-details']}>
                    <h4>Lenovo Tab M8 Tablet, 8" HD Android Tablet, Quad-Core Processor, 2GHZ, 16GB...</h4>
                    <p>Resolution: 1280 x 800 Wireless Technology: Wi-Fi Generation: 2nd gen Screen Type: LCD Storage: 16 GB Peso: 0.460 kg</p>
                    <div className={style['product-actions']}>
                        <div className={style["product-quantity"]}>
                            <button>-</button>
                            <input type="text" min="1" max="5" value="1" />
                            <button>+</button>
                        </div>
                        <button><FavoriteBorderIcon className={style['favorite-icon']} /></button>
                        <button><DeleteOutlineIcon  className={style['trash-icon']} /></button>
                    </div>
                </div>
                <div className={style['product-price']}>S/ 372</div>
            </div>
            <hr />
        </div>
    );
}