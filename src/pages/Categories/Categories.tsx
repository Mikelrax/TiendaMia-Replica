
import NavBar from "../../modules/common/components/NavBar/NavBar";
import Footer from "../../modules/common/components/Footer/Footer";
import Slider from "../../modules/common/components/Slider/Slider";
import InfoBanner from "../../modules/common/components/InfoBanner/InfoBanner";
import TreeProducts from "../../modules/products/components/TreeProducts/TreeProducts";

const Categories = () => {

    return (
        <>
            <NavBar />
            <Slider />
            <InfoBanner />
            <TreeProducts />
            <TreeProducts />
            <Footer />
        </>
    );
};

export default Categories;