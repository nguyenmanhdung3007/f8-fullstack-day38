import useCart from "@/hooks/useCart";
import { Button } from "./ui/button";
import { Minus, Plus, X } from "lucide-react";

function CartDropdown() {
  const { items, totalPrice, updateQuantity, removeFromCart, clearCart } =
    useCart();

  console.log(items);

  // Nếu giỏ hàng rỗng
  if (items.length === 0)
    return (
      <div className="bg-neutral-200 p-4 rounded-lg text-white w-72">
        Your cart is empty.
      </div>
    );

  return (
    <div className="bg-neutral-200 p-4 rounded-lg text-white w-72 shadow-xl">
      {items.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center mb-3 border-b pb-2"
        >
          {/* tên + giá */}
          <div>
            <p className="font-semibold text-foreground">{item.title}</p>
            <p className="text-sm text-foreground">
              {item.price.toLocaleString()}$
            </p>
          </div>

          {/* controls: - qty + x */}
          <div className="flex items-center gap-2">
            {/* Giảm */}

            <Button
              size="icon"
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
            >
              <Minus />
            </Button>

            <span className="text-foreground">{item.quantity}</span>

            {/* Tăng */}
            <Button
              size="icon"
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
            >
              <Plus />
            </Button>

            {/* Xóa */}
            <Button
              variant="destructive"
              size="icon"
              onClick={() => removeFromCart(item.id)}
            >
              <X />
            </Button>
          </div>
        </div>
      ))}

      {/* Tổng tiền */}
      <div className="font-bold mb-2 text-foreground">
        Total: {totalPrice.toLocaleString()}$
      </div>

      {/* Clear cart */}
      <Button variant="destructive" onClick={clearCart} className="w-full">
        Clear Cart
      </Button>
    </div>
  );
}

export default CartDropdown;
