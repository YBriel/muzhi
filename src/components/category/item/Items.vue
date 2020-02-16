<template>
  <div>
    <div  v-for="(item,index) in siderbarGoods" :key="item.id">
      <van-card
        :desc=item.desc
        :title=item.title
        :price=item.price
        thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
      >
        <div slot="footer">
          <van-icon size="25" style="margin-top: -20px" :id=item.id name="cart-o" @click="addShoppingCar($event,index)"/>
        </div>
      </van-card>
    </div>

  </div>
</template>

<script>
  import {Card, Button, Tag, Stepper, Icon} from 'vant';
  import PubSub from 'pubsub-js'
  export default {
    name: "Items",
    components: {
      VanCard: Card,
      VanButton: Button,
      VanTag: Tag,
      VanStepper: Stepper,
      VanIcon: Icon,
      PubSub:PubSub
    },
    props:{
      siderbarGoods:{
        Type: Array,
        required:true
      }
    },
    data() {
      return {
        imgUrl: './static/ani.ico'
      }
    },
    methods: {
      stepperChange(e) {
        console.log(JSON.stringify(e));
      },
      addShoppingCar(e,index) {
        //alert("tt")
        PubSub.publish("AddToCart",this.siderbarGoods[index]);
        console.log("发布消息"+e.currentTarget.id,JSON.stringify(this.siderbarGoods[index]));

      }
    }
  }
</script>

<style scoped>

</style>
