import { getProducts } from "../../constant/getProducts";

const getDataById = (id: any) => {
    typeof(id) === "string" ? id = parseInt(id) : null;
    const data = getProducts().filter((product) => product.id === id);
    return data[0];
};

export default getDataById;