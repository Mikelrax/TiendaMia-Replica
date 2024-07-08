import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const useAddCart = (id: number) => {
    const [inCart, setInCart] = useState(false);
    const [cartItems, setCartItems] = useState<number[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedCartProducts = localStorage.getItem("cartProducts");
        if (storedCartProducts) {
            const cartArray = JSON.parse(storedCartProducts);
            setInCart(cartArray.includes(id));
        }
        setLoading(false);
    }, [id]);

    useEffect(() => {
        const storedCartProducts = localStorage.getItem("cartProducts");
        if (storedCartProducts) {
            const cartArray = JSON.parse(storedCartProducts);
            setCartItems(cartArray);
        }
        setLoading(false);
    }, []);

    const getCartItems = () => {
        const storedCartProducts = localStorage.getItem("cartProducts");
        if (storedCartProducts) {
            const cartArray = JSON.parse(storedCartProducts);
            return cartArray;
        }
        setLoading(false);
    };

    const toggleCartItem = () => {
        setTimeout(() => {
        console.log("toggleCartItem");
        setLoading(true);
        const storedCartProducts = localStorage.getItem("cartProducts");
        let cartArray = storedCartProducts ? JSON.parse(storedCartProducts) : [];
        if (cartArray.includes(id)) {
            cartArray = cartArray.filter((cartId: number) => cartId !== id);
            toast.error("Producto eliminado del carrito");
            setInCart(false);
        } else {
            cartArray.push(id);
            toast.success("Producto agregado al carrito");
            setInCart(true);
        }

        localStorage.setItem("cartProducts", JSON.stringify(cartArray));
        setCartItems(cartArray);
        setLoading(false);
    }, 500);
    };

    const deleteCart = () => {
        setLoading(true);
        localStorage.removeItem("cartProducts");
        setCartItems([]);
        setInCart(false);
        toast.success("Carrito eliminado");
        setLoading(false);
    };

    return { inCart, toggleCartItem, loading, cartItems, deleteCart, getCartItems};
};

export default useAddCart;
