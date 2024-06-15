import { useState, useEffect } from "react";
import productsData from "../../../../public/products-store.json";
import categoriesData from "../../../../public/products-categories.json";

const categories: string[] = categoriesData.categories;
console.log(categories);
type Category = typeof categories[number];

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
}

const useRandomProducts = (categorie: Category, offersLength: number) => {
    console.log("hl");
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

    useEffect(() => {
        const getRandomProducts = () => {
            const filteredProducts = productsData.filter((product: any) => product.category === categorie);

            const normalizedProducts = filteredProducts.map((product: any) => ({
                ...product,
                price: typeof product.price === "string" ? parseFloat(product.price) : product.price
            }));

            const shuffledProducts = [...normalizedProducts].sort(() => 0.5 - Math.random());
            return shuffledProducts.slice(0, offersLength);
        };

        setSelectedProducts(getRandomProducts());
    }, [categorie, offersLength]);

    return selectedProducts;
};

export default useRandomProducts;