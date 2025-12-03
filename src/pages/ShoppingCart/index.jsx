import { useEffect, useState } from "react";

import CardItem from "@/components/CardItem";
import { ShoppingCartIcon } from "lucide-react";
import CartIcon from "@/components/CartIcon";

function ShoppingCart() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://api01.f8team.dev/api/products`)
      .then((res) => res.json())
      .then((products) => {
        console.log(products.data.items);
        setProducts(products.data.items || []);
      });
  }, []);

  return (
    <div className="flex items-center justify-center flex-col w-260 mx-auto mt-5">
      <header className="relative w-full">
        <h1 className="text-center">Shopping Cart</h1>
        <CartIcon  />
      </header>

      <div className="w-full grid grid-cols-4 gap-4 m-2 mt-5">
        {products.map((product) => (
          <CardItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ShoppingCart;
