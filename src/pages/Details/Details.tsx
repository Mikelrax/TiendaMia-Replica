import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getDataById from "../../modules/productDetails/utils/getDataById";
import NavBar from "../../modules/common/components/NavBar/NavBar";
import ProductDetails from "../../modules/productDetails/Components/ProductDetails";
import Footer from "../../modules/common/components/Footer/Footer";
import { getCategories } from "../../modules/constant/getCategories";
import OfferList from "../../modules/products/components/OfferList";

const Details = () => {
    const { id } = useParams();
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getDataById(id);
            setData(result);
        };
        fetchData();
    }, [id]);
    const categoriesData = getCategories();
    const mathRamdom = Math.floor(Math.random() * 4);
    const categories = categoriesData[mathRamdom];
    const checkCategories = categories == "Todas" ? categoriesData[1] : categories;

    if (!data) return <div>No data found: id={id} : error 404</div>;

    return (
        <>
            <NavBar />
            <ProductDetails id={id} />
            <OfferList categorie={checkCategories} />
            <Footer />
        </>
    );
};

export default Details;