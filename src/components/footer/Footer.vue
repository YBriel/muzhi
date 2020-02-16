<template>
  <div>
    <van-tabbar v-model="active" style="height: 50px">
      <van-tabbar-item icon="home-o" route="true" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o" route="true" to="/category">分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" route="true" to="/shoppingCar">购物车</van-tabbar-item>
      <van-tabbar-item icon="manager-o" route="true" to="/mine">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  import {Tabbar, TabbarItem} from 'vant';

  export default {
    components: {
      VanTabbar: Tabbar,
      VanTabbarItem: TabbarItem
    },
    data() {
      return {
        active: ''
      }
    }
  }
</script>

<style scoped>

</style>
