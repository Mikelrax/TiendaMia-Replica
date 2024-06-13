import "./ProductCardSearch.css";
import type { Product } from "../../Types/Product";
import { Suspense } from "react";
import { ImageWithSkeleton, ProductCardSearchSkeleton, ProductImageSkeleton } from "../../../skeletons/Skeletons";
import { Link } from "react-router-dom";

export default function ProductCardSearch({ product }: { product: Product }) {
    const LinkStyles = {
        textDecoration: "none",
        color: "#000",
    };
    return (
        <Suspense fallback={<ProductCardSearchSkeleton />}>
            <div className="product-cards">
                <div className="card">
                    <Suspense fallback={<ProductImageSkeleton />}>
                        <Link to={`/details/${product?.id}`} style={{ ...LinkStyles }}>
                            <ImageWithSkeleton src={product.image} alt={product.name} classNameImage="" />
                        </Link>
                    </Suspense>
                    <div className="badge"></div>
                    <Link to={`/details/${product?.id}`} style={{ ...LinkStyles }}>
                        <h3>{product.name}</h3>
                    </Link>
                    <Link to={`/details/${product?.id}`} style={{ ...LinkStyles }}>
                        <p>{product.name} || {product.note}</p>
                    </Link>
                    <div className="price">
                        <Link to={`/details/${product?.id}`} style={{ ...LinkStyles }}>
                            <span className="current-price">S/ {product.price}</span>
                            <span className="original-price">S/ {product.price * 2}</span>
                            <span className="discount">50% OFF</span>
                        </Link>
                    </div>
                    <div className="rating">{Math.random() * 5 > 3 ? "⭐⭐⭐" : "⭐⭐"}</div>
                </div>
            </div>
        </Suspense>
    );
}