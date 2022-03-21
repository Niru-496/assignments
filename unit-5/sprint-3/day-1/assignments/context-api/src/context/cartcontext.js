import { createContext, useState } from "react";

export const CartContext = createContext();

// above line create obnly global empy box
const CartProvider = ({ children }) => {

	const [cart,setCart] = useState(12)

	const handleChange = (value) => {
		setCart(cart+value)
	}
	return <CartContext.Provider value={{cart,handleChange}}>{children}</CartContext.Provider>;
};

export { CartProvider };
