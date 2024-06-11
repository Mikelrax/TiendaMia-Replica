import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getDataById from "../../modules/productDetails/utils/getDataById";
import NavBar from "../../modules/common/components/NavBar/NavBar";
import ProductDetails from "../../modules/productDetails/Components/ProductDetails";

console.log("Details");

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

    if (!data) return <div>No data found: id={id} : error 404</div>;

    return (
        <>
            <NavBar />
            <div key={data.id}>
                <h1>{data.name}</h1>
                <p>{data.description}</p>
            </div>
            <ProductDetails />
        </>
    );
};

export default Details;