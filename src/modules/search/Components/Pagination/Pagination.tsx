import ReactPaginate from "react-paginate";
import { useState } from "react";
import { Product } from "../../Types/Product";
import ProductCardSearch from "../ProductCardSearch/ProductCardSearch";
import ButtonPag from "../../../common/components/ButtonPag/ButtonPag";
import styles from "./Pagination.module.css";

interface ProductProps {
    products: Product[];
}

function Items({ products }: ProductProps) {
    return (
        <>
            <div className="product-cards">
                {products.map((product) => (
                    <ProductCardSearch key={product.id} product={product} />
                ))}
            </div>
        </>
    );
}

interface PaginationProps {
    itemsPerPage: number;
    products: Product[];
}

function PaginatedItems({ itemsPerPage, products }: PaginationProps) {
    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = products.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(products.length / itemsPerPage);

    const handlePageClick = (event: { selected: number }) => {
        const newOffset = (event.selected * itemsPerPage) % products.length;
        console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
        setItemOffset(newOffset);
    };

    return (
        <>
            <Items products={currentItems} />
            <ReactPaginate
                className={styles["pagination"]}
                breakLabel="<div>...</div>"
                nextLabel={<ButtonPag> next {">"}</ButtonPag>}
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                pageLinkClassName={styles["break-link"]}
                previousLabel={<ButtonPag>{"<"} prev </ButtonPag>}  
                renderOnZeroPageCount={null}
            />
        </>
    );
}

export default PaginatedItems;