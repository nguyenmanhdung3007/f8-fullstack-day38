import paths from "./configs/paths";

import HomePage from "./pages/Homepage";
import Counter from "./pages/Counter";
import CountDown from "./pages/CountDown";
import ShoppingCart from "./pages/ShoppingCart";

const routes = [
  { path: paths.home, component: HomePage },
  { path: paths.counter, component: Counter },
  { path: paths.countdown, component: CountDown },
  { path: paths.shoppingCart, component: ShoppingCart },
];

export default routes;
