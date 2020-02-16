<template>
  <div>
  <van-grid>
    <van-grid-item icon="wap-home-o" text="社区" />
    <van-grid-item icon="bulb-o" text="生活" />
    <van-grid-item icon="like-o" text="健康" />
    <van-grid-item icon="gift-o" text="公益" />
    <van-grid-item icon="logistics" text="旅行" />
    <van-grid-item icon="flag-o" text="团建" />
    <van-grid-item icon="service-o" text="交流" />
    <van-grid-item icon="friends-o" text="合作" />
  </van-grid>
  </div>
</template>

<script>
  import { Grid, GridItem,Icon,Divider  } from 'vant';
  export default {
        components:{
          VanGrid:Grid,
          VanGridItem:GridItem,
          VanIcon:Icon,
          VanDivider:Divider
        }
    }
</script>

<style scoped>

</style>
