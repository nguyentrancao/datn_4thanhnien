import Home from "./Page/Home/Home";
import Auth from "./Page/Auth/Auth.js";
import Cart from "./Page/Cart/Cart";
import Phone from "./Page/Phone/Phone.js";
import Mac from "./Page/Phone/Mac.js";
import AppleWatch from "./Page/Phone/AppleWatch.js";
import Airpod from "./Page/Phone/Airpod.js";
import Payment from "./Page/Payment/Payment.js";

const routes = [
  { path: "/", component: Home },
  { path: "/Payment", component: Payment },
  { path: "/Auth", component: Auth },
  { path: "/Cart", component: Cart },
  { path: "/Phone", component: Phone },
  { path: "/Mac", component: Mac },
  { path: "/AppleWatch", component: AppleWatch },
  { path: "/Airpod", component: Airpod },
  { path: "/Payment", component: Payment },
];

export default routes;
