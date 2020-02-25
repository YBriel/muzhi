<template>
  <div>
  <div>
    <van-nav-bar
      title="填写订单"
      left-text=""
      left-arrow
    />
  </div>
  <div class="van-address-item" >
    <div role="radio" tabindex="0" aria-checked="true" class="van-radio">
      <div class="van-radio__icon van-radio__icon--round van-radio__icon--checked" style="font-size: 18px;"><i
        class="van-icon van-icon-success"><!----></i></div>
      <span class="van-radio__label"><div class="van-address-item__name">张三 13000000000<span
        class="van-tag van-tag--round van-tag--danger van-address-item__tag">默认</span></div><div
        class="van-address-item__address">浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室</div></span></div>
  </div>
  <div id="orderList">
    <div>
      <van-card
        num=2
        price="200"
        desc="商品描述"
        title="商品标题"
        thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
      >
        <!-- <div slot="footer">
           &lt;!&ndash;id=10086 step="1"   :value="order[index].num"&ndash;&gt;
           <van-stepper  name="aaa" @change="stepperChange($event,index)"/>
         </div>-->
      </van-card>
    </div>
    <div>
      <van-card
        num=2
        price="200"
        desc="商品描述"
        title="商品标题"
        thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
      >
        <!-- <div slot="footer">
           &lt;!&ndash;id=10086 step="1"   :value="order[index].num"&ndash;&gt;
           <van-stepper  name="aaa" @change="stepperChange($event,index)"/>
         </div>-->
      </van-card>
    </div>
    <div>
      <van-card
        num=2
        price="200"
        desc="商品描述"
        title="商品标题"
        thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
      >
        <!-- <div slot="footer">
           &lt;!&ndash;id=10086 step="1"   :value="order[index].num"&ndash;&gt;
           <van-stepper  name="aaa" @change="stepperChange($event,index)"/>
         </div>-->
      </van-card>
    </div>
    <div>
      <van-card
        num=2
        price="200"
        desc="商品描述"
        title="商品标题"
        thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
      >
        <!-- <div slot="footer">
           &lt;!&ndash;id=10086 step="1"   :value="order[index].num"&ndash;&gt;
           <van-stepper  name="aaa" @change="stepperChange($event,index)"/>
         </div>-->
      </van-card>
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
    <div >
      <van-submit-bar
        :price="3050"
        button-text="提交订单"
        text-align="left"
        @submit="onSubmit"
        style="margin-bottom: 50px; margin-top: auto"
      />
    </div>
  </div>
</template>

<script>
  import {NavBar,Card,Stepper,SubmitBar,Panel,Popup,Picker,Field} from 'vant'
  import PubSUb from 'pubsub-js'
  export default {
    name: "SubmitOrder",
    components: {
      VanNavBar: NavBar,
      VanCard:Card,
      VanStepper:Stepper,
      VanSubmitBar:SubmitBar,
      VanPanel:Panel,
      VanPopup:Popup,
      VanPicker:Picker,
      VanField:Field,
      PubSUb:PubSUb
    },
    data(){
      return{
        value: '',
        columns: ['快递配送', '门店自提', '他人代收'],
        showPicker: false,
      }
    },
    methods:{
      onSubmit(){
        alert("点击了提交按钮")
      },
      onConfirm(value) {
        this.value = value;
        this.showPicker = false;
      },
    },
    mounted() {
      PubSUb.subscribe("goCheckBill",(msg,data)=>{
        console.log("购物车要结算的货物");
        console.log(JSON.parse(data));
      })
    }
  }
</script>

<style scoped>
  #orderList {
    overflow: auto;
    height: 300px;
    width: auto;
    background-color:red;
  }

  #orderList::-webkit-scrollbar {
    border-width:1px;
  }
</style>
