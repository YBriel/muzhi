<template>
  <div>
    <van-grid :column-num="5">
      <van-grid-item color="red" icon="cash-back-record" text="待付款" />
      <van-grid-item icon="logistics" text="待收货" />
      <van-grid-item icon="exchange" text="待取货" />
      <van-grid-item icon="completed" text="已完成" />
      <van-grid-item icon="failure" text="已关闭" />
    </van-grid>
  </div>
</template>

<script>
  import { Grid, GridItem } from 'vant';
    export default {
        name: "MineOrderStatus",
      components:{
        VanGrid:Grid,
        VanGridItem:GridItem
      }
    }
</script>

<style scoped>

</style>
