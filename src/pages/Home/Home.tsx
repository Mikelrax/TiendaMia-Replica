import Hero from "../../modules/common/components/Hero";
import NavBar from "../../modules/common/components/NavBar/NavBar";
import Footer from "../../modules/common/components/Footer/Footer";
import Slider from "../../modules/common/components/Slider/Slider";
import Announcement from "../../modules/common/components/announcement/Announcement";
import OfferList from "../../modules/products/components/OfferList";
import InfoBanner from "../../modules/common/components/InfoBanner/InfoBanner";
import TreeProducts from "../../modules/products/components/TreeProducts/TreeProducts";
import EmbedSocial from "../../modules/common/components/EmbedSocial/EmbedSocial";

const Home = () => {

    return (
        <>
            <NavBar />
            <Hero first="tecnología" second="renovada" />
            <div>
                <Slider></Slider>
            </div>
            <Announcement />
            <InfoBanner/>
            <TreeProducts />
            <OfferList categorie="electrodomésticos"/>
            <OfferList categorie="herramientas"/>
            <OfferList categorie="tecnologia"/>
            <EmbedSocial />
            <Footer />
        </>
    );
};

export default Home;
