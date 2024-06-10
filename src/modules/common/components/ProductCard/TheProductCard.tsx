import { ImageWithSkeleton } from '../../../skeletons/Skeletons';
import type { Product } from './ProductCardTypes';
import './product.css';

export default function TheProductCard({ product }: { product: Product }) {
    return (
        <div className="product-card">
          <ImageWithSkeleton src={product.image} alt={product.name} classNameImage="product-image" />
          <div className="product-details">
            <h2 className="product-title">{product.name}</h2>
            <p className="product-price-old">Desde S/ 596</p>
            <p className="product-price-new">S/.{product.price}</p>
            <p className="product-discount">35% OFF</p>
          </div>
        </div>
    )
}