import { getProducts } from "../../constant/getProducts";

const getDataById = (id: any) => {
    const data = getProducts().filter((product) => product.id === id);
    return data;
};

export default getDataById;