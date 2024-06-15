import "./MainComponent.css";
import { useSearch } from "../../Providers/SearchContextProvider";
import { useEffect, useState } from "react";
import { Product } from "../../Types/Product";
import { useSearchData } from "../../Hooks/useSearchData";
import PaginatedItems from "../Pagination/Pagination";
import MenuDeployed from "../MenuDeployed/MenuDeployed";
import filterArrayProducts from "../../utils/filterArrayProducts";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { getProducts } from "../../../constant/getProducts";
import { useSetWindowPath } from "../../Hooks/useSetWindowPath";

const MainComponent = () => {
    const productData = getProducts();
    const { searchTerm, setSearchTerm } = useSearch();
    const [products, setProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<string[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const myvoid= () : void => {products}; 
    console.log(myvoid());
    const resetFilters = () => {
        setCategories([]);
        setFilteredProducts(productData as any[]);
        setProducts(productData as any[]);
        useSetWindowPath("");
        setSearchTerm("");
    };

    useEffect(() => {
        const searchResults = useSearchData(searchTerm);
        setProducts(searchResults);
    }, [searchTerm]);

    useEffect(() => {
        const filtered = filterArrayProducts(categories, searchTerm);
        setFilteredProducts(filtered);
    }, [categories, searchTerm]);

    const checkProducts = filteredProducts.length === 0 ? <strong>No hay resultados</strong> : `${filteredProducts.length} resultados`;

    return (
        <>
            <div className="searchContainer">
                <div className="component component-1">
                    <h2>{searchTerm}</h2>
                    <div className="">{checkProducts}</div>
                </div>
                <div className="component component-2">
                    <MenuDeployed setCategories={setCategories} />
                    <div>
                        <button className="button-restart" onClick={resetFilters}>
                            <RestartAltIcon />
                        </button>
                    </div>
                </div>
                <div className="component component-3">
                    <PaginatedItems itemsPerPage={4} products={filteredProducts} />
                </div>
            </div>
        </>
    );
};

export default MainComponent;
