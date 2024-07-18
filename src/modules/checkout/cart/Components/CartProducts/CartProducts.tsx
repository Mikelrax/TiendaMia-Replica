// CartProducts.js
import style from './CartProducts.module.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useQuantity } from '../../Hooks/useQuantity';
import useFavorite from '../../../../productDetails/Hooks/useFavorite';
import { Favorite } from '@mui/icons-material';
import useAddCart from '../../Hooks/useAddCart';

interface CartProductProps {
    id: number;
    name: string;
    price: number;
    image: string;
    note: string;
}

export default function CartProducts({ id, name, price, image, note }: CartProductProps) {
    const { quantity, increment, decrement } = useQuantity({ initialValue: 1 });
    const { favorite, toggleFavorite, loading } = useFavorite(id);
    const { toggleCartItem } = useAddCart(id);

    const handleQuantityChange = () => {
        console.log(quantity);
    };

    return (
        <div className={style.products} id={id.toString()}>
            <div className={style.product}>
                <img src={image} alt={name} />
                <div className={style['product-details']}>
                    <h4>{name}</h4>
                    <p>{note}</p>
                    <div className={style['product-actions']}>
                        <div className={style["product-quantity"]}>
                            <button onClick={decrement}>-</button>
                            <input type="text" min="1" max="5" value={quantity} onChange={handleQuantityChange} />
                            <button onClick={increment}>+</button>
                        </div>
                        <button onClick={toggleFavorite} disabled={loading} className={style["favorite-button"]}>
                            {favorite ?
                                <Favorite className={style["favorite-icon"]} />
                                :
                                <FavoriteBorderIcon className={style["favorite-icon"] + " " + style["favorite-icon-loading"]} />
                            }
                        </button>
                        <button onClick={toggleCartItem}><DeleteOutlineIcon className={style['trash-icon']} /></button>
                    </div>
                </div>
                <div className={style['product-price']}>S/ {price}</div>
            </div>
            <hr />
        </div>
    );
}