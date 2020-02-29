<template>
  <div>
    <van-cell icon="bill" title="我的优惠券" is-link to="myCouponList"/>
    <van-cell icon="location" title="我的收货地址" is-link to="myAddress"/>
    <van-cell icon="cash-back-record" title="到店付款" is-link to="index"/>
    <van-cell icon="chat-o" title="智障机器人" is-link to="im"/>
    <van-cell icon="phone-circle-o" title="电话客服" is-link to="index"/>
    <van-cell icon="question-o" title="退换/售后" is-link to="index"/>
    <van-cell icon="share" title="注册" is-link to="MineRegister"/>
    <van-cell icon="share" title="登录" is-link to="login"/>
    <van-button @click="clickBtn">点击</van-button>
    <!-- <van-cell icon="share" title="测试页面" @click="clickBtn"/>     <van-cell icon="share" title="测试页面" is-link to="shoppingCarConfirm"/>-->
  </div>

</template>

<script>
  import {Cell, CellGroup,Button} from 'vant';
  import {Divider} from 'vant';

  export default {
    name: "MineItems",
    components: {
      VanCell: Cell,
      VanCellGroup: CellGroup,
      VanDivider: Divider,
      VanButton:Button
    },
    methods: {
      clickBtn() {
        navigator.geolocation.getCurrentPosition(function (position) {
          console.log(position.coords.latitude, position.coords.longitude);
        });
      },
      aaa() {
        alert("sss")
      }
    }
  }
</script>

<style scoped>

</style>
