import useCart from "@/hooks/useCart";
import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "./ui/badge";
import CartDropdown from "./CartDropdown";

function CartIcon() {
  const { totalQuantity } = useCart(); // lấy tổng sô lượng

  return (
    <div className="absolute right-0 top-0 cursor-pointer z-10">
      <div className="text-3xl peer">
        <ShoppingCartIcon />
      </div>

      {/* Badge hiển thị số lượng (ẩn nếu = 0) */}
      {totalQuantity > 0 && (
        <Badge
          className="absolute -right-4 -top-3  h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"
          variant="outline"
        >
          {totalQuantity}
        </Badge>
      )}

      {/* Hover vào icon → hiện dropdown */}
      <div className="absolute right-0 top-full hidden peer-hover:block hover:block z-10 pointer-events-auto">
        <CartDropdown />
      </div>
    </div>
  );
}

export default CartIcon;
