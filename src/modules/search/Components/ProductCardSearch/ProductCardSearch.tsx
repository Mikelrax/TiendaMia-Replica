import "./ProductCardSearch.css";
import type { Product } from "../../Types/Product";

export default function ProductCardSearch({ product }: { product: Product }) {

    return (
        <div className="product-cards">
            <div className="card">
                <img src={product.image} alt={product.name} />
                <div className="badge"></div>
                <h3>{product.name}</h3>
                <p>Lenovo Tab M8 Tablet, 8" HD Android Tablet, Quad-Core Processor, 2GHz, 16GB Storage, Long Battery Life, Android 9 Pie (Refurbished)</p>
                <div className="price">
                    <span className="current-price">S/ {product.price}</span>
                    <span className="original-price">S/ 789</span>
                    <span className="discount">50% OFF</span>
                </div>
                <div className="rating">⭐⭐⭐</div>
            </div>
        </div>
    )
}