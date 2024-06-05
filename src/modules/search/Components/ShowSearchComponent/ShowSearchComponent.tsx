
import ProductCardSearch from "../ProductCardSearch/ProductCardSearch";
import "./ShowSearchComponent.css";
import useWindowPath from "../../Hooks/useWindowPath";
const ShowSearchComponent = () => {
    const getPath = useWindowPath();
    console.log(getPath);

    const repeatProducts: number = 8;
    return (
        <>
            <div className="searchContainer">
                <div className="component component-1">Component 1</div>
                <div className="component component-2">Component 2</div>
                <div className="component component-3">
                    <div className="product-cards">
                        {Array.from({ length: repeatProducts }, (_, index) => (
                            <ProductCardSearch key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShowSearchComponent;