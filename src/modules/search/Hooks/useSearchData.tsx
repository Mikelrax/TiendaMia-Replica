import productData from "../../../../public/products-store.json";
import type { Product } from "../Types/Product";
export const useSearchData = (searchTerm: string): Product[] => { 
    const products: Product[] = productData
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(lowerCaseSearchTerm)
    );
    return filteredProducts;
}