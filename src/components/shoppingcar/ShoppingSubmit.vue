<template>
<div>
  <van-submit-bar
    :price="totalPrice"
    button-text="提交订单"
    button-round="true"
    currency="¥"
    @submit="submitFrom" style="margin-bottom: 50px; margin-top: auto">
    <van-check-box :value=selectAll @click="onChange">全选</van-check-box>
  </van-submit-bar>
</div>
</template>
z
<script>

  import {SubmitBar, Tag,Checkbox} from 'vant';
  import PubSub from 'pubsub-js'

  export default {
    components: {
      VanSubmitBar: SubmitBar,
      VanTag: Tag,
      VanCheckBox:Checkbox
    },
    imgUrl1: {
      type: Number,
      value: 60.2
    },
    data(){
      return {
        imgUrl: this.imgUrl1,
        selectAll:false,
        totalPrice: 0
      }
    },
    mounted() {
    /*  PubSub.subscribe("totalPrice", (msg,totalPrice)=> {
          this.totalPrice=totalPrice;
      });*/

      PubSub.subscribe("newTotalPrice", (msg,totalPrice)=> {
        this.totalPrice=totalPrice;
      });
      PubSub.subscribe("isAllCheck",(msg,data)=>{
        this.selectAll=data;
      })
    },
    methods:{
      submitFrom(){
        alert("哈哈哈");
      },
      onChange(){
        this.selectAll=!this.selectAll;
        PubSub.publish("isCheck",this.selectAll);
      }
    }
  }
</script>

<style scoped>

</style>
