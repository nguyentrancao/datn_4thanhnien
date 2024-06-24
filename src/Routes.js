import Home from "./Page/Home/Home";
import Payment from "./Page/Payment/Payment.js";
import Auth from "./Page/Auth/Auth.js";
import Cart from "./Page/Cart/Cart";
import Phone from "./Page/Phone/Phone.js";
import Mac from "./Page/Phone/Mac.js";
import Detail from "./Page/Phone/Detail.js";
// import Mac from "./Page/Danhmuc/Mac";
// import AppleWatch from "./Page/Danhmuc/AppleWatch";
// import Airpod from "./Page/Danhmuc/Airpod";

const routes = [
  { path: "/", component: Home },
  { path: "/Payment", component: Payment },
  { path: "/Auth", component: Auth },
  { path: "/Cart", component: Cart },
  { path: "/Phone", component: Phone },
  { path: "/Mac", component: Mac },
  { path: "/Detail", component: Detail},
];

export default routes;
