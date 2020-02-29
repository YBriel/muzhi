import Vue from 'vue'
import Router from 'vue-router'
import Category from "../components/app/Category";
import Home from "../components/app/Home";
import ShoppingCar from "../components/app/ShoppingCar";
import Mine from "../components/app/Mine";
import MineRegister from "../components/mine/Register";
import Login from "../components/mine/Login";
import MyAddress from "../components/mine/MyAddress";
import MyCouponList from "../components/mine/MyCouponList";
import TestPage from "../components/mine/TestPage";
import ShoppingCarConfirm from "../components/shoppingcar/ShoppingCarConfirm";
import SubmitOrder from "../components/order/SubmitOrder";
import ImFrame from "../components/im/ImFrame";

Vue.use(Router);

export default new Router({

  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/shoppingCar',
      component: ShoppingCar
    },
    {
      path: '/mine',
      component: Mine
    },
    {
      path: '/MineRegister',
      component: MineRegister
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/myAddress',
      component: MyAddress
    },
    {
      path: '/myCouponList',
      component: MyCouponList
    },
    {
      path: '/testPage',
      component: TestPage
    },
    {
      path: '/shoppingCarConfirm',
      component: ShoppingCarConfirm
    },
    {
      path: '/submitOrder',
      component: SubmitOrder
    },
    {
      path: '/im',
      component: ImFrame
    }

  ]

})
