import { useContext } from "react"
import { CartContext } from "../context/cartcontext";

export const Cart = () => {

    const { cart } = useContext(CartContext);
    return (
		<nav>
			<h4>No.of Items in :{cart}</h4>
		</nav>
	);
}