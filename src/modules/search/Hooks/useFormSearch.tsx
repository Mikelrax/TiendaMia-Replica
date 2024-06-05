import { useState, useEffect } from "react";
import { useSearch } from "./useSearch"; // Asegúrate de tener la ruta correcta

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
}

export const useFormSearch = (initialProducts: Product[]) => {
    const [products, setProducts] = useState<Product[]>(initialProducts);
    const [searchTerm, setSearchTerm] = useState<string>("");

    useEffect(() => {
        const fetchSearchResults = async () => {
            const result = await useSearch(searchTerm);
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