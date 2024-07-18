import { Link } from 'react-router-dom';
import { ImageWithSkeleton } from '../../../skeletons/Skeletons';
import type { Product } from './ProductCardTypes';
import './product.css';

export default function TheProductCard({ product }: { product: Product }) {
  return (
    <div className="product-card">
      <Link to={`/details/${product?.id}`}>
        <ImageWithSkeleton src={product.image} alt={product.name} classNameImage="product-image" />
      </Link>
      <div className="product-details">
        <Link to={`/details/${product?.id}`} style={{ textDecoration: "none" }}>
          <h2 className="product-title">{product.name}</h2>
        </Link>
        <p className="product-price-old">Desde S/ 596</p>
        <Link to={`/details/${product?.id}`} style={{ textDecoration: "none" }}>
          <p className="product-price-new">S/.{product.price}</p>
        </Link>
        <p className="product-discount">35% OFF</p>
      </div>
    </div>
  )
}