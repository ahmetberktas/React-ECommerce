import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProductContext = createContext();

export function ProductProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        axios
            .get(`https://fakestoreapi.com/products${selectedCategory ? '/category/' + selectedCategory : ''}`)
            .then((res) => setProducts(res.data))
            .catch((err) => console.log(err));
    }, [selectedCategory]);

    return (
        <ProductContext.Provider value={{ products, setSelectedCategory }}>
            {children}
        </ProductContext.Provider>
    )
}