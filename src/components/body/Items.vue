<template>
  <div>
    <van-card
      num="1"
      price="998"
      desc="炭烤食蚁兽"
      title="食蚁兽"
      :thumb=imgUrl
    />
    <van-card
      num="2"
      price="998"
      desc="红烧食蚁兽"
      title="食蚁兽"
      :thumb=imgUrl
    />
    <van-card
      num="2"
      price="998"
      desc="清蒸食蚁兽"
      title="食蚁兽"
      :thumb=imgUrl
    />
    <van-card
      num="2"
      price="998"
      desc="清蒸食蚁兽"
      title="食蚁兽"
      :thumb=imgUrl
    />
    <van-card
      num="2"
      price="998"
      desc="清蒸食蚁兽"
      title="食蚁兽"
      :thumb=imgUrl
    />
  </div>
</template>

<script>
  import { Card } from 'vant';
  export default {
    components: {
      VanCard: Card
    },
    data() {
      return {
        imgUrl: './static/ani.ico'
      }
    }
    }
</script>

<style scoped>

</style>
