import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CartContext, CartProvider } from "./contexts/CartContext";

createRoot(document.getElementById("root")).render(
  <CartProvider>
    <App />
  </CartProvider>
);
