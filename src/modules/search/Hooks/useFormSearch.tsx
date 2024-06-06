import { useState, useEffect } from "react";
import { useSearchData } from "./useSearchData";
import { type Product } from "../Types/Product";

export const useFormSearch = (initialProducts: Product[]) => {
    const [products, setProducts] = useState<Product[]>(initialProducts);
    const [searchTerm, setSearchTerm] = useState<string>("");

    useEffect(() => {
        const fetchSearchResults = async () => {
            const result = await useSearchData(searchTerm);
            setProducts(result);
        };

        if (searchTerm) {
            fetchSearchResults();
        } else {
            setProducts(initialProducts);
        }
    }, [searchTerm, initialProducts]);

    return { products, setSearchTerm };
};