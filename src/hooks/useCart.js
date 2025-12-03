import { CartContext } from "@/contexts/CartContext";
import { useContext } from "react";

function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside <CartProvider>");
  }
  return context;
}

export default useCart;
