import Search from "@/pages/Search";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Detail from "@/pages/Detail";
import AddCartSuccess from "@/pages/AddCartSuccess";
import ShopCart from "@/pages/ShopCart";
import Trade from "@/pages/Trade";
import Pay from "@/pages/Pay";
import PaySuccess from "@/pages/PaySuccess";
import Center from "@/pages/Center";
import myOrder from "@/pages/Center/myOrder";
import groupOrder from "@/pages/Center/groupOrder";

export default [
  {
    path: "/center",
    component: Center,
    meta: { show: true },
    children: [
      {
        path: "myorder",
        component: myOrder,
        // meta: { show: true },
      },
      {
        path: "grouporder",
        component: groupOrder,
        // meta: { show: true },
      },
      {
        path: "/center",
        redirect: "/center/myorder",
      },
    ],
  },
  {
    path: "/paysuccess",
    component: PaySuccess,
    meta: { show: true },
  },
  {
    path: "/pay",
    component: Pay,
    meta: { show: true },
    beforeEnter: (to, from, next) => {
      if (from.path == "/trade") {
        next();
      } else {
        next(false);
      }
    },
  },
  {
    path: "/trade",
    component: Trade,
    meta: { show: true },
    beforeEnter: (to, from, next) => {
      if (from.path == "shopCart") {
        next();
      } else {
        next(false);
      }
    },
  },
  {
    // name: "shopcart",
    path: "/ShopCart",
    component: ShopCart,
    meta: { show: true },
  },
  {
    name: "addcartsuccess",
    path: "/addcartsuccess",
    component: AddCartSuccess,
    meta: { show: true },
  },
  {
    path: "/detail/:skuid?",
    component: Detail,
    meta: { show: true },
  },
  {
    path: "/home",
    component: () => import("@/pages/Home"),
    meta: { show: true },
  },
  {
    path: "/search/:keyword?",
    component: Search,
    meta: { show: true },
    name: "search",
  },
  {
    path: "/login",
    component: Login,
    meta: { show: false },
  },
  {
    path: "/register",
    component: Register,
    meta: { show: false },
  },
];
