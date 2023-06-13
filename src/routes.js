import NotFound from "./pages/404";
import Home from "./pages/home";
import BuyAdsList from "./pages/buy-ads-list";
import SellAdsList from "./pages/sell-ads-list";
import BuyAdsOne from "./pages/buy-ads-one";
import SellAdsOne from "./pages/sell-ads-one";
import Ads from "./pages/ads";
import CreateAds from "./pages/create-ads";
import Payments from "./pages/payments";
import Payment from "./pages/payment";
import CreatePayment from "./pages/create-payment";

// Pages
const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/buy-ads-list",
    component: BuyAdsList,
  },
  {
    path: "/sell-ads-list",
    component: SellAdsList,
  },
  {
    path: "/buy-ads-one",
    component: BuyAdsOne,
  },
  {
    path: "/sell-ads-one",
    component: SellAdsOne,
  },
  {
    path: "/ads",
    component: Ads,
  },
  {
    path: "/create-ads",
    component: CreateAds,
  },
  {
    path: "/payments",
    component: Payments,
  },
  {
    path: "/payments/:id",
    component: Payment,
  },
  {
    path: "/create-payment",
    component: CreatePayment,
  },

  // Default route (404 page). MUST BE THE LAST
  {
    path: "(.*)",
    component: NotFound,
  },
];

export default routes;
