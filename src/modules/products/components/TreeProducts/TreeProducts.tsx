import "./ThreeProducts.css";

export default function Widget() {
    return (
        <div className="container">
            <div className="card">
                <img src="https://placehold.co/200x200" alt="Producto 1" />
                <h2>Productos seleccionados de China</h2>
                <button>Ver productos</button>
            </div>
            <div className="card">
                <img src="https://placehold.co/200x200" alt="Producto 2" />
                <h2>Tecnología</h2>
                <button>Ver productos</button>
            </div>
            <div className="card">
                <img src="https://placehold.co/200x200" alt="Producto 3" />
                <h2>Perfumes</h2>
                <button>Ver productos</button>
            </div>
        </div>
    )
}