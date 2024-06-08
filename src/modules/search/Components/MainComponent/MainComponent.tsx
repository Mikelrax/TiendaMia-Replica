import "./MainComponent.css";
import { useSearch } from "../../Providers/SearchContextProvider";
import { useEffect, useState } from "react";
import { Product } from "../../Types/Product";
import { useSearchData } from "../../Hooks/useSearchData";
import PaginatedItems from "../Pagination/Pagination";
import FilterSearch from "../FilterSearch/FilterSearch";
const MainComponent = () => {
    const { searchTerm } = useSearch();
    const [products, setProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<string[]>([]);

    useEffect(() => {
        setProducts(useSearchData(searchTerm));
    }, [searchTerm]);

    const checkProducts = products.length === 0 ? "No hay resultados" : `${products.length} resultados`;

    return (
        <>
            <div className="searchContainer">
                <div className="component component-1">
                    <h2>{searchTerm}</h2>
                    <div className="">{checkProducts}</div>
                </div>
                <div className="component component-2"><FilterSearch categories={categories} setCategories={setCategories} /></div>
                <div className="component component-3">
                    <PaginatedItems itemsPerPage={4} products={products} />
                </div>
            </div>
        </>
    );
};

export default MainComponent;

