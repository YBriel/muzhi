<template>
  <div>
    <div>
      <van-nav-bar
        title="填写订单"
        left-text=""
        left-arrow
      />
    </div>
    <div class="van-address-item">
      <div role="radio" tabindex="0" aria-checked="true" class="van-radio">
        <div class="van-radio__icon van-radio__icon--round van-radio__icon--checked" style="font-size: 18px;"><i
          class="van-icon van-icon-success"><!----></i></div>
        <span class="van-radio__label"><div class="van-address-item__name">张三 13000000000<span
          class="van-tag van-tag--round van-tag--danger van-address-item__tag">默认</span></div><div
          class="van-address-item__address">浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室</div></span></div>
    </div>
    <div id="orderList">
      <div>
        <van-card v-for="(item,index) in cartArr" :key="index"
                  :num=item.num
                  :price="item.price"
                  :desc="item.desc"
                  :title="item.title"
                  thumb="https://img.yzcdn.cn/vant/ipad.jpeg"/>
      </div>
    </div>
    <!--    <van-field
          readonly
          clickable
          name="picker"
          :value="value"
          label="配送方式"
          placeholder="点击选择配送方式"
          @click="showPicker = true"
        />
        <van-popup v-model="showPicker" position="bottom">
          <van-picker
            show-toolbar
            :columns="columns"
            @confirm="onConfirm"
            @cancel="showPicker = false"
          />
        </van-popup>
        <van-field
          name="comment"
          label="用户留言"
          placeholder="用户留言"
          :rules="[{ required: false, message: '请填写用户名' }]"
        />-->
    <div>
      <van-submit-bar
        :price="totalPrice*100"
        button-text="提交订单"
        text-align="left"
        @submit="onSubmit"
        style="margin-bottom: 50px; margin-top: auto"
      />
    </div>
  </div>
</template>

<script>
  import {NavBar, Card, Stepper, SubmitBar, Panel, Popup, Picker, Field, Notify, Toast} from 'vant'
  import PubSUb from 'pubsub-js'
  import {getLocalStorage} from "../../util/utils";

  export default {
    name: "SubmitOrder",
    components: {
      VanNavBar: NavBar,
      VanCard: Card,
      VanStepper: Stepper,
      VanSubmitBar: SubmitBar,
      VanPanel: Panel,
      VanPopup: Popup,
      VanPicker: Picker,
      VanField: Field,
      PubSUb: PubSUb
    },
    data() {
      return {
        value: '',
        columns: ['快递配送', '门店自提', '他人代收'],
        showPicker: false,
        cartInfo: {},
        cartArr: [],
        totalPrice: "",
      }
    },
    methods: {
      onSubmit() {
        let item = getLocalStorage("user-login-info"); //获取本地用户信息
        console.log("信息啊"+JSON.stringify(item));
        if(item===null){
          Toast.fail({duration:500, message:'请登录！'});
        }else {
          this.cartInfo.uid=item.id;
        }
        this.postJson("aliPay/aliWapPay", this.cartInfo).then(response => {
          console.log("支付返回值"+JSON.stringify(response));
          let res = response.data;
          if (res.code === 200) {
            //支付宝支付
            const div = document.createElement('div');
            div.innerHTML = res.data; //此处form就是后台返回接收到的数据
            document.body.appendChild(div);
            document.forms[0].submit()
          } else {
            Notify({type: 'danger',duration:1500, message: res.msg});
          }
        });
      },
      onConfirm(value) {
        this.value = value;
        this.showPicker = false;
      },
    },
    mounted() {
      let cartToPay = getLocalStorage("cart-to-pay");
      if (cartToPay === null) {
        this.$router.replace("/shoppingCar");
      } else {
        this.cartInfo = cartToPay;
        this.cartArr = cartToPay.product1;
        this.totalPrice = parseFloat(cartToPay.price);
      }
    }
  }
</script>

<style scoped>
  #orderList {
    overflow: auto;
    height: 300px;
    width: auto;
  }

  #orderList::-webkit-scrollbar {
    overflow: auto;
    border-width: 1px;
  }
</style>
