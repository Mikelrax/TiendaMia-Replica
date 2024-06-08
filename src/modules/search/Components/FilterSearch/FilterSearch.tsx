import { useEffect } from "react";
import { getCategories } from "../../../constant/getCategories";

interface categoriesProps {
    categories: string[];
    setCategories: any;
}
const componentCategories = getCategories();

const FilterSearch = ({categories, setCategories}: categoriesProps) => {
    useEffect(() => {
        setCategories("hola");
        console.log(categories)
    },[]);

    return (
        <div>
            <h2>Categorias</h2>
        </div>
    )
}

export default FilterSearch;