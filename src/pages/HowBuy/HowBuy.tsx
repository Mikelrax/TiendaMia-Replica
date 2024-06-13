import Footer from "../../modules/common/components/Footer/Footer";
import NavBar from "../../modules/common/components/NavBar/NavBar";
import Helper from "../../modules/common/components/Help/Help";
import BuyGuide from "../../modules/common/components/BuyGuide/BuyGuide";

const HowBuy = () => {
    return (
        <>
            <NavBar />
            <h2 style={{ fontSize: "2.5rem" }}><center> Como comprar </center></h2>
            <BuyGuide />
            <Helper />
            <Footer />
        </>
    )
}

export default HowBuy;