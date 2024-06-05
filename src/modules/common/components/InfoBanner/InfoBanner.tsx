import "./InfoBanner.css";

export default function InfoBanner() {
    return (
        <div className="info-banner-container">
            <div className="info-banner">
                <div className="info-item">
                    <img src="https://placehold.co/50x50" alt="Package Icon" />
                    <p>Qué es Tiendamia. Fácil, rápido y seguro. <a href="#">Cómo comprar</a></p>
                </div>
                <div className="divider"></div>
                <div className="info-item">
                    <img src="https://placehold.co/50x50" alt="Airplane Icon" />
                    <p>Información de Aduanas. Hacemos todo por ti. <a href="#">Saber más</a></p>
                </div>
                <div className="divider"></div>
                <div className="info-item">
                    <img src="https://placehold.co/50x50" alt="Payment Icons" />
                    <p>Paga con crédito o débito.</p>
                </div>
                <div className="divider"></div>
                <div className="info-item">
                    <img src="https://placehold.co/50x50" alt="Headset Icon" />
                    <p>Ayuda y seguimiento en tu idioma. <a href="#">Centro de ayuda en línea</a></p>
                </div>
                <div className="divider"></div>
                <div className="info-item">
                    <img src="https://placehold.co/50x50" alt="Flag Icon" />
                    <p>Sé un Ciudadano de Tiendamia. <a href="#">Únete hoy</a></p>
                </div>
            </div>
        </div>
    )
}