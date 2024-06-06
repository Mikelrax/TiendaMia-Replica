import styles from "./InputSearch.module.css";
import { useEffect, useState } from "react";
import { useSetWindowPath } from "../../Hooks/useSetWindowPath";
import { useSearch } from "../../Providers/SearchContextProvider";

const InputSearch= () => {
    const [searchTermWindow, setSearchTermWindow] = useState("");
    const { setSearchTerm } = useSearch();

    useEffect(() => {
        useSetWindowPath(searchTermWindow);
    }, [searchTermWindow]);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            search: { value: string };
        };
        const searchTerm = target.search.value;
        
        setSearchTerm(searchTerm);
        setSearchTermWindow(searchTerm);
    };

    return (
        <>
            <form className={styles["header-form"]} onSubmit={onSubmit}>
                <input
                    className={styles["header-input"]}
                    type="text"
                    placeholder="Buscar productos"
                    id="search"
                    name="search"
                />
                <button type="submit" style={{ display: "none" }}>Search</button>
            </form>
        </>
    );
};

export default InputSearch;