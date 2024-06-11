import { ImageWithSkeleton } from '../../../skeletons/Skeletons';
import type { Product } from './ProductCardTypes';
import './product.css';

export default function TheProductCard({ product }: { product: Product }) {
  return (
    <div className="product-card">
      <a href={`/details/${product?.id}`}>
        <ImageWithSkeleton src={product.image} alt={product.name} classNameImage="product-image" />
      </a>
      <div className="product-details">
        <a href={`/details/${product?.id}`} style={{ textDecoration: "none" }}>
          <h2 className="product-title">{product.name}</h2>
        </a>
        <p className="product-price-old">Desde S/ 596</p>
        <a href={`/details/${product?.id}`} style={{ textDecoration: "none" }}>
          <p className="product-price-new">S/.{product.price}</p>
        </a>
        <p className="product-discount">35% OFF</p>
      </div>
    </div>
  )
}