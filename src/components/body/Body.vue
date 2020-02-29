<template>
  <div>
  <Swipe :height="180" :autoplay="3000" indicator-color="green" >
    <SwipeItem><img src="http://39.106.121.52:8088/store/static/swiper.jpeg" alt="小丸子"></SwipeItem>
    <SwipeItem><img src="http://39.106.121.52:8088/store/static/swiper.jpeg" alt="1"></SwipeItem>
    <SwipeItem><img src="http://39.106.121.52:8088/store/static/swiper.jpeg" alt="1"></SwipeItem>
    <SwipeItem><img src="http://39.106.121.52:8088/store/static/swiper.jpeg" alt="1"></SwipeItem>
    <SwipeItem><img src="http://39.106.121.52:8088/store/static/swiper.jpeg" alt="1"></SwipeItem>
  </Swipe>
  <bodyGrid/>
  </div>
</template>

<script>
  import { Swipe, SwipeItem } from 'vant';
  import Grid from './Grid'
  import Items from './Items'
  export default {
      components:{
        Swipe,
        SwipeItem,
        bodyGrid:Grid,
        bodyItems:Items
      }
    }
</script>

<style scoped>

</style>
