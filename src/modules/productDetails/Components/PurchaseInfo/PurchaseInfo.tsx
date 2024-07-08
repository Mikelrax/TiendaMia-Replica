import styles from "./PurchaseInfo.module.css";

const PurchaseInfo = ({ data }: any) => {

    const checkVerified = data.verified !== undefined && data.verified !== false;
    const checkStock = data.stock !== undefined && data.stock !== 0;

    console.log(data);
    return (
        <>
            <h2>{data.name || "Apple MacBook Air 13.3\" Core i7 / 8GB / 128GB - Silver (Refurbished)"}</h2>
            <ul>
                <li>Screen size: {data.screenSize || "13.3"}</li>
                <li>Notas: {data.note || "No disponibles en este producto"}</li>
                <li>Modelo: {data.models || "Modelo sin especificar"}</li>
                <li>Stock: {data.stock || "Sin stock"}</li>
                <li>Colores: {data.colors || "Colores sin especificar"}</li>
                <li>Color Electronics: {data.colors || "Silver"}</li>
            </ul>
            <p className={styles.note}>* Este producto es recertificado, renovado o refabricado. Esto significa que el mismo ha sido reacondicionado o reparado por el vendedor para lucir y funcionar correctamente. El producto puede venir en caja genérica.</p>
            <p>Disponibilidad: <span style={checkStock ? { color: "green" } : { color: "red" }}>
                {checkStock ? "En stock" : "No disponible"}
            </span></p>
            <p>Marca: <span className={styles.brand}>{data.brand || "Apple"}</span></p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p>Descripción: {data.description || "No disponible en este producto"}</p>
            </div>
            <p>Producto de:
                <span style={checkVerified ? { color: "green" } : { color: "red" }}>
                    {checkVerified ? " Vendedor verificado" : " Vendedor no verificado"}
                </span>
            </p>
        </>
    )
}

export default PurchaseInfo;