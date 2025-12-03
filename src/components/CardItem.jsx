import useCart from "@/hooks/useCart";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";

function CardItem({ product }) {
  const { addToCart } = useCart();

  return (
    <Card>
      <CardHeader className="h-full">
        <CardTitle>{product.title}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>
      <CardContent className="h-full">
        <img
          src={
            product.thumbnail ? product.thumbnail : `@/assets/placeholder.png`
          }
          alt=""
          className=""
        />

        <span>{product.price.toLocaleString()}$</span>
      </CardContent>
      <CardFooter>
        <Button onClick={() => addToCart(product)}>Add to Cart</Button>
      </CardFooter>
    </Card>
  );
}

export default CardItem;
