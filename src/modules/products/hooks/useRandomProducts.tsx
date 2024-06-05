import { useState, useEffect } from "react";
import products from "../../../../public/products-store.json";
import categoriesData from "../../../../public/products-categories.json";

const categories: string[] = categoriesData.categories;
console.log(categories);
type Category = typeof categories[number];

interface product {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
}

const useRandomProducts = (categorie: Category, offersLength: number) => {
    const [selectedProducts, setSelectedProducts] = useState([] as product[]);

    useEffect(() => {
        const getRandomProducts = () => {
            const filteredProducts = products.filter(product => product.category === categorie);
            const shuffledProducts = [...filteredProducts].sort(() => 0.5 - Math.random());
            // if(shuffledProducts.length === 0){console.error("categorie not found: " + categorie)}
            // return shuffledProducts.slice(0, offersLength);
            return shuffledProducts.splice(0, offersLength);
        };

        setSelectedProducts(getRandomProducts());
    }, []);

    return selectedProducts;
};

export default useRandomProducts;