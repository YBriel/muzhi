<template>
  <div>
    <div>
      <van-nav-bar
        title="我的购物车"
        left-arrow/>
    </div>
    <div>
      <ShoppingItems @computeTotalPrice="computeTotalPrice"  @swipeDel="swipeDel"/>
      <ShoppingSubmit/>
    </div>
  </div>

</template>

<script>
  import ShoppingItems from "../shoppingcar/ShoppingItem";
  import ShoppingSubmit from "../shoppingcar/ShoppingSubmit";
  import Footer from "../body/Footer";
  import PubSub from 'pubsub-js'

  import {NavBar, Notify, Toast} from 'vant';

  export default {
    components: {
      ShoppingItems: ShoppingItems,
      ShoppingSubmit: ShoppingSubmit,
      VanNavBar: NavBar,
      Footer: Footer,
      PubSub: PubSub
    },
    data() {
      return {
        imgUrl: './static/ani.ico',
        totalPrice: 0,
        orderCopy: [],
      }
    },
    methods: {
      computeTotalPrice(orderCopy) {
        //未选中任何商品
        console.log("接收到事件" + JSON.stringify(orderCopy));
      },
      swipeDel(index) {
        this.order.splice(index, 1);
      }
    },
    created() {

    },
    mounted() {
      PubSub.subscribe("AddNewItem",(msg,data)=>{
        console.log(data);
      })
    },

  }
</script>

<style scoped>

</style>
