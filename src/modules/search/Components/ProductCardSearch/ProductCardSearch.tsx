import "./ProductCardSearch.css";
import type { Product } from "../../Types/Product";
import { Suspense } from "react";
import { ImageWithSkeleton, ProductCardSearchSkeleton, ProductImageSkeleton } from "../../../skeletons/Skeletons";

export default function ProductCardSearch({ product }: { product: Product }) {
    return (
        <Suspense fallback={<ProductCardSearchSkeleton />}>
            <div className="product-cards">
                <div className="card">
                    <Suspense fallback={<ProductImageSkeleton />}>
                        <ImageWithSkeleton src={product.image} alt={product.name} />
                    </Suspense>
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
        </Suspense>
    );
}