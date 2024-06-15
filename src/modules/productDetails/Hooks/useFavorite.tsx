import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const useFavorite = (id: number) => {
    const [favorite, setFavorite] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedFavorites = localStorage.getItem("favorites");
        if (storedFavorites) {
            const favoritesArray = JSON.parse(storedFavorites);
            setFavorite(favoritesArray.includes(id));
        }
        setLoading(false);
    }, [id]);

    const toggleFavorite = () => {
        setTimeout(() => {
            setLoading(true);
            const storedFavorites = localStorage.getItem("favorites");
            let favoritesArray = storedFavorites ? JSON.parse(storedFavorites) : [];
            if (favoritesArray.includes(id)) {
                favoritesArray = favoritesArray.filter((favoriteId: number) => favoriteId !== id);
                toast.error("Producto eliminado de favoritos");
                setFavorite(false);
            } else {
                favoritesArray.push(id);
                toast.success("Producto agregado a favoritos");
                setFavorite(true);
            }

            localStorage.setItem("favorites", JSON.stringify(favoritesArray));
            setLoading(false);
        }, 500);
    };

    return { favorite, toggleFavorite, loading };
};

export default useFavorite;