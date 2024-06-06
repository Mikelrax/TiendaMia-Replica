import "./MainComponent.css";
import { useSearch } from "../../Providers/SearchContextProvider";
import { useEffect, useState } from "react";
import { Product } from "../../Types/Product";
import { useSearchData } from "../../Hooks/useSearchData";
import PaginatedItems from "../Pagination/Pagination";
const MainComponent = () => {
    const { searchTerm } = useSearch();
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        
        setProducts(useSearchData(searchTerm));
    }, [searchTerm]);
    
    return (
        <>
            <div className="searchContainer">
                <div className="component component-1">Component 1</div>
                <div className="component component-2">Component 2</div>
                <div className="component component-3">
                <PaginatedItems itemsPerPage={6} products={products} />
                </div>
            </div>
        </>
    );
};

export default MainComponent;

