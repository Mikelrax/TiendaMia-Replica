import SecurityIcon from '@mui/icons-material/Security';
import "./InfoBanner.css";
import { CreditCardOutlined, HelpOutline, VerifiedUser, FlightTakeoff} from '@mui/icons-material';

export default function InfoBanner() {
    return (
        <div className="info-banner-container">
            <div className="info-banner">
                <div className="info-item">
                    <SecurityIcon color="primary" />
                    <p>Qué es Tiendamia. Fácil, rápido y seguro. <a href="#">Cómo comprar</a></p>
                </div>
                <div className="divider"></div>
                <div className="info-item">
                    <FlightTakeoff color="primary" />
                    <p>Información de Aduanas. Hacemos todo por ti. <a href="#">Saber más</a></p>
                </div>
                <div className="divider"></div>
                <div className="info-item">
                    <CreditCardOutlined color="primary" />
                    <p>Paga con crédito o débito.</p>
                </div>
                <div className="divider"></div>
                <div className="info-item">
                    <HelpOutline color="primary" />
                    <p>Ayuda y seguimiento en tu idioma. <a href="#">Centro de ayuda en línea</a></p>
                </div>
                <div className="divider"></div>
                <div className="info-item">
                    <VerifiedUser color="primary" />
                    <p>Sé un Ciudadano de Tiendamia. <a href="#">Únete hoy</a></p>
                </div>
            </div>
        </div>
    )
}