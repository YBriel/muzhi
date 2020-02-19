<template>
  <div>
    <div v-for="(item,index) in siderbarGoods" :key="item.id">
      <van-card
        :desc=item.desc
        :title=item.title
        :price=item.price
        thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
      >
        <div slot="footer">
          <van-icon size="25" style="margin-top: -20px" :id=item.id name="cart-o"
                    @click="addShoppingCar($event,index)"/>
        </div>
      </van-card>
    </div>

  </div>
</template>

<script>
  import {Card, Button, Tag, Stepper, Icon, Notify, Toast} from 'vant';
  import PubSub from 'pubsub-js'
  import Axios from "axios";

  export default {
    name: "Items",
    components: {
      VanCard: Card,
      VanButton: Button,
      VanTag: Tag,
      VanStepper: Stepper,
      VanIcon: Icon,
      PubSub: PubSub,
      Toast: Toast
    },
    props: {
      siderbarGoods: {
        Type: Array,
        required: true
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
      addShoppingCar(e, index) {
        console.log("sssssssssssssss");
        PubSub.publish("AddToCart", this.siderbarGoods[index]);
        //console.log("发布消息"+e.currentTarget.id,JSON.stringify(this.siderbarGoods[index]));
        let params = new URLSearchParams();
        params.append('userId', "4fdcaa35ccea4cb5b62926189c95bf45");
        params.append('pid', 1004);
        Axios.post("http://39.106.121.52:8088/mstore/addToCard", params).then((response) => {
          let res = response.data;
          console.log(JSON.stringify(res));
          if (res.code === 200) {
            Toast.success('加入购物车成功！');
          } else {
            Notify({type: 'danger', message: res.msg});
          }
        });
      }
    }
  }
</script>

<style scoped>

</style>
