<template>
  <div>
    <van-card
      num="2"
      price="2.00"
      desc="描述信息"
      title="商品标题"
      thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
    >
      <div slot="tags">
        <van-tag plain type="danger">标签</van-tag>
        <van-tag plain type="danger">标签</van-tag>
      </div>
      <div slot="footer">
        <van-button size="mini">数量+</van-button>
        <van-button size="mini">加入购物车</van-button>
      </div>
    </van-card>
    <van-card
      num="2"
      price="2.00"
      desc="描述信息"
      title="商品标题"
      thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
    >
      <div slot="tags">
        <van-tag plain type="danger">标签</van-tag>
        <van-tag plain type="danger">标签</van-tag>
      </div>
      <div slot="footer">
        <van-button size="mini">数量+</van-button>
        <van-button size="mini">加入购物车</van-button>
      </div>
    </van-card>
  </div>
</template>

<script>
  import { Card,Button,Tag } from 'vant';
    export default {
        name: "Items",
      components: {
        VanCard: Card,
        VanButton:Button,
        VanTag:Tag
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
