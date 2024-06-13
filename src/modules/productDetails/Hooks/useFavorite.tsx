import { useState, useEffect } from "react";

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
                setFavorite(false);
            } else {
                favoritesArray.push(id);
                setFavorite(true);
            }

            localStorage.setItem("favorites", JSON.stringify(favoritesArray));
            setLoading(false);
        }, 1000);
    };

    return { favorite, toggleFavorite, loading };
};

export default useFavorite;