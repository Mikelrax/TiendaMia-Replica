import { useEffect } from "react";
import { getCategories } from "../../../constant/getCategories";

export interface categoriesProps {
    setCategories: any;
}
const componentCategories = getCategories();
componentCategories.unshift("Todas");


const FilterSearch = ({ setCategories}: categoriesProps) => {

    return (
        <div>
            <h2>Categorias</h2>
        </div>
    )
}

export default FilterSearch;