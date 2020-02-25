<template>
  <div>
    <van-submit-bar
      :price="totalPrice"
      button-text="去结算"
      button-round="true"
      currency="¥"
      @submit="submitFrom" style="margin-bottom: 50px; margin-top: auto">
      <van-check-box :value=selectAll @click="onChange">全选</van-check-box>
    </van-submit-bar>
    <van-popup
      v-model="show"
      closeable
      position="bottom"
      :style="{ height: '30%' }"
    >
      <div class="van-address-item">
        <div role="radio" tabindex="0" aria-checked="true" class="van-radio" style="margin-bottom: 60px">
          <div class="van-radio__icon van-radio__icon--round van-radio__icon--checked" style="font-size: 18px;"><i
            class="van-icon van-icon-success"><!----></i></div>
          <span class="van-radio__label"><div class="van-address-item__name">张三 13000000000<span
            class="van-tag van-tag--round van-tag--danger van-address-item__tag">默认</span></div><div
            class="van-address-item__address">浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室</div></span></div>
        <div style="margin-left:75%">
          <van-button round type="info">去付款</van-button>
        </div>
      </div>
    </van-popup>
  </div>
</template>
z
<script>

  import {SubmitBar, Tag, Checkbox, Notify, Popup, Button} from 'vant';
  import PubSub from 'pubsub-js';
  import Axios from 'axios'
  import {getLocalStorage} from "../../util/utils";
  import Toast from "vant/lib/toast";

  export default {
    components: {
      VanSubmitBar: SubmitBar,
      VanTag: Tag,
      VanCheckBox: Checkbox,
      VanPopup: Popup,
      VanButton: Button
    },
    imgUrl1: {
      type: Number,
      value: 60.2
    },
    data() {
      return {
        imgUrl: this.imgUrl1,
        selectAll: false,
        totalPrice: 0,
        show: false
      }
    },
    mounted() {
      PubSub.subscribe("newTotalPrice", (msg, totalPrice) => {
        this.totalPrice = totalPrice;
      });
      PubSub.subscribe("isAllCheck", (msg, data) => {
        this.selectAll = data;
      })
    },
    methods: {
      submitFrom() {
        let item = getLocalStorage("user-login-info");
        if (item === null) {
          Toast({message: "请登录！", duration: 1000})
        } else {
          if (this.totalPrice <= 0) {
            Notify({type: 'danger',duration:1500, message: "请先勾选需要付款的商品！"});
          } else {
            PubSub.publish("goCheck","1"); //通知订单页面发送数据给结算页面

          }
        }
      },
      onChange() {
        this.selectAll = !this.selectAll;
        PubSub.publish("isCheck", this.selectAll);
      }
    },
  }
</script>

<style scoped>

</style>
