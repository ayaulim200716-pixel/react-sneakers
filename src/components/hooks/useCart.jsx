import AppContext from "../../context";
import { useContext } from "react";

export const useCart = () => {
  const { cartItems, setCartItems } = useContext(AppContext);
  console.log(cartItems);
  const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);

  return { cartItems, setCartItems, totalPrice };
};
