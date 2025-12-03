import { useEffect, useReducer } from "react";
import CartContext from "./Context";
import { initialState, reducer } from "@/pages/ShoppingCart/reducer";
import {
  ADD_CART,
  CLEAR_CART,
  REMOVE_CART,
  RESTORE,
  UPDATE_QUANTITY,
} from "@/pages/ShoppingCart/consts";

const Provider = ({ children }) => {
  // khởi tạo reducer
  const [state, dispatch] = useReducer(reducer, initialState);

  // khôi phục cart từ localStorage
  useEffect(() => {
    const savedData = localStorage.getItem("cart");
    if (savedData) {
      dispatch({ type: RESTORE, payload: JSON.parse(savedData) });
    }
  }, []);

  // mỗi khi giỏ hàng thay đổi => lưu vào localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state));
  }, [state]);

  // các thao tác giỏ hàng
  const addToCart = (product) => dispatch({ type: ADD_CART, payload: product });

  const removeFromCart = (itemId) =>
    dispatch({ type: REMOVE_CART, payload: itemId });

  const updateQuantity = (itemId, quantity) =>
    dispatch({ type: UPDATE_QUANTITY, payload: { itemId, quantity } });

  const clearCart = () => dispatch({ type: CLEAR_CART });

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeFromCart, updateQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default Provider;
