import "./ProductCardSearch.css";


export default function ProductCardSearch() {

    return (
        <div className="product-cards">
            <div className="card">
                <img src="https://placehold.co/150x150" alt="Lenovo Tab M8 Tablet" />
                <div className="badge">PROMOCIONADO</div>
                <h3>Lenovo</h3>
                <p>Lenovo Tab M8 Tablet, 8" HD Android Tablet, Quad-Core Processor, 2GHz, 16GB Storage, Long Battery Life, Android 9 Pie (Refurbished)</p>
                <div className="price">
                    <span className="current-price">S/ 369</span>
                    <span className="original-price">S/ 789</span>
                    <span className="discount">50% OFF</span>
                </div>
                <div className="rating">⭐⭐⭐⭐⭐</div>
            </div>
        </div>
    )
}