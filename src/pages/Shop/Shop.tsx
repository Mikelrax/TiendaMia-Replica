import Footer from "../../modules/common/components/Footer/Footer";
import NavBar from "../../modules/common/components/NavBar/NavBar";
import OfferList from "../../modules/products/components/OfferList";
import MainComponent from "../../modules/search/Components/MainComponent/MainComponent";
import { getCategories } from "../../modules/constant/getCategories";

const Shop = () => {
    const categoriesData = getCategories();
    const mathRamdom = Math.floor(Math.random() * 4);
    const categories = categoriesData[mathRamdom];
    const checkCategories = categories == "Todas" ? categoriesData[1] : categories;
    console.log(categories);
    return (
        <>
            <NavBar />
            <MainComponent></MainComponent>
            <OfferList categorie={checkCategories} />
            <Footer />
        </>
    )
}

export default Shop;