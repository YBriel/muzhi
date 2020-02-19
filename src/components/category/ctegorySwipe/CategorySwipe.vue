<template>
  <Swipe :autoplay="3000" indicator-color="green" :width="200" :height="100">
    <SwipeItem><img src="http://39.106.121.52:8088/store/static/swiper.jpeg" alt="1"></SwipeItem>
    <SwipeItem><img src="http://39.106.121.52:8088/store/static/swiper.jpeg" alt="1"></SwipeItem>
    <SwipeItem><img src="http://39.106.121.52:8088/store/static/swiper.jpeg" alt="1"></SwipeItem>
    <SwipeItem><img src="http://39.106.121.52:8088/store/static/swiper.jpeg" alt="1"></SwipeItem>
    <SwipeItem><img src="http://39.106.121.52:8088/store/static/swiper.jpeg" alt="1"></SwipeItem>
  </Swipe>
</template>

<script>
  import {Swipe, SwipeItem} from 'vant';

  export default {
    components: {
      Swipe,
      SwipeItem,
    },
    name: "CategorySwipe"
  }
</script>

<style scoped>

</style>
