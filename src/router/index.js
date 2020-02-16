import Vue from 'vue'
import Router from 'vue-router'
import Category from "../components/app/Category";
import Home from "../components/app/Home";
import ShoppingCar from "../components/app/ShoppingCar";
import Mine from "../components/app/Mine";

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
    }
  ]

})
