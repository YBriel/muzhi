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
  import {getLocalStorage} from "../../../util/utils";
  import {post} from "../../../util/axiosUtil";

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
        //console.log(JSON.stringify(e));
      },
      addShoppingCar(e, index) {
        let item = getLocalStorage("user-login-info"); //获取本地用户信息
        if(item===null){
          Toast.fail({duration:500, message:'请登录！'});
        }else {
          PubSub.publish("AddToCart", this.siderbarGoods[index]);
          let params = new URLSearchParams();
          params.append('userId', item.id);
          params.append('pid', this.siderbarGoods[index].id);
          post("addToCard",params).then(response=>{
            let res = response.data;
            if (res.code === 200) {
              Toast.success('加入购物车成功！');
            } else {
              Notify({type: 'danger',duration:1500, message: res.msg});
            }
          });
        }
      }
    }
  }
</script>

<style scoped>

</style>
