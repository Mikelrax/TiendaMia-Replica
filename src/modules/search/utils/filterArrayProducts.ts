import { Product } from "../Types/Product";
import { getProducts } from "../../constant/getProducts";
import { getCategories } from "../../constant/getCategories";

const products: Product[] = getProducts();
const categoriesProducts: string[] = getCategories();

type Category = typeof categoriesProducts[number];

export default function filterArrayProducts(categories: Category[], searchTerm: string): Product[] {
    searchTerm = searchTerm.toLowerCase();
    console.log("categories", categories);
    console.log("searchTerm", searchTerm);

    let filteredProducts = products;

    if (categories.length > 0 && !categories.includes("Todas")) {
        filteredProducts = categories.flatMap((category) =>
            products.filter((product) => product.category === category)
        );
    }

    if (searchTerm !== "") {
        filteredProducts = filteredProducts.filter((product) =>
            product.name.toLowerCase().includes(searchTerm)
        );
    }

    console.log("filteredProducts", filteredProducts);
    return filteredProducts;
}
