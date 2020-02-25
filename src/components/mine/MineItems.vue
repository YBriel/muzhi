<template>
  <div>
    <van-cell icon="bill" title="我的优惠券" is-link to="myCouponList"/>
    <van-cell icon="location" title="我的收货地址" is-link to="myAddress"/>
    <van-cell icon="cash-back-record" title="到店付款" is-link to="index"/>
    <van-cell icon="chat-o" title="我的消息" is-link to="index"/>
    <van-cell icon="phone-circle-o" title="电话客服" is-link to="index"/>
    <van-cell icon="question-o" title="退换/售后" is-link to="index"/>
    <van-cell icon="share" title="注册" is-link to="MineRegister"/>
    <van-cell icon="share" title="登录" is-link to="login"/>
<!--    <van-cell icon="share" title="测试页面" is-link to="testPage"/>
    <van-cell icon="share" title="测试页面" is-link to="shoppingCarConfirm"/>-->
  </div>

</template>

<script>
  import {Cell, CellGroup} from 'vant';
  import {Divider} from 'vant';

  export default {
    name: "MineItems",
    components: {
      VanCell: Cell,
      VanCellGroup: CellGroup,
      VanDivider: Divider
    }
  }
</script>

<style scoped>

</style>
