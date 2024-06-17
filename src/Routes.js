// routes.js
import Home from "./Page/Home/Home";
import Payment from "./Page/Payment/Payment";
import Auth from "./Page/Auth/Auth";
import Cart from "./Page/Cart/Cart";

const Route = [
  { path: "/", component: Home },
  { path: "/payment", component: Payment },
  { path: "/auth", component: Auth },
  { path: "/cart", component: Cart },
];

export default Route;
