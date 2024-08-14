import { createContext, useState } from "react";

export const BasketContext = createContext();

export function BasketProvider({ children }) {
    const [basket, setBasket] = useState([]);

    const addToBasket = (product) => {
        const found = basket.find((i) => i.id === product.id)
        if (found) {
            const updated = { ...found, amount: found.amount + 1};
            const newBasket = basket.map((item) => item.id === updated.id ? updated : item)
            setBasket(newBasket);
        } else {
            setBasket([...basket, { ...product, amount: 1 }]);
        }
    };

    const removeFromBasket = (id) => { };

    return (
        <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket }}>
            {children}
        </BasketContext.Provider>
    )
}
