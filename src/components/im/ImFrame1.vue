<template>
  <div>
      <div class="header">
        <span style="float: left;">正在与客服 聊天</span>
        <span style="float: right;">14:21</span>
      </div>
    <div id="body">

    </div>
    <div class="footer">
      <van-row>
        <van-col span="18"><van-field class="inputClass" v-model="inputText" placeholder="请输入用户名"/></van-col>
        <van-col span="6"><VanButton>发送</VanButton></van-col>
      </van-row>
    </div>
  </div>

</template>

<script>
  import {Field,Col, Row ,Button} from 'vant'

  export default {
    components: {
      VanField: Field,
      VanCol:Col,
      VanRow:Row,
      VanButton:Button
    },
    data() {
      return {
        inputText: ''
      }
    }
  }
</script>

<style scoped>
  .header {
    background: #000;
    height: 40px;
    color: #fff;
    line-height: 34px;
    font-size: 15px;
    padding: 0 10px;
  }
  .footer {
 /*   width: 430px;
    height: 50px;*/
    background: #666;
    position: absolute;
    bottom: 0;
    padding: 10px;
  }
  .footer input {
/*    width: 360px;
    height: 45px;*/
    outline: none;
    font-size: 20px;
    text-indent: 10px;
    position: absolute;
    border-radius: 6px;
    right: 80px;
  }
  .footer span {
    display: inline-block;
    width: 62px;
    height: 48px;
    background: #ccc;
    font-weight: 900;
    line-height: 45px;
    cursor: pointer;
    text-align: center;
    position: absolute;
    right: 10px;
    border-radius: 6px;
  }
  .footer span:hover {
    color: #fff;
    background: #999;
  }
</style>
