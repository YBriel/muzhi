<template>
  <div>
    <div class="header">
      <span style="float: left;">正在和小牧聊天...</span>
      <span style="float: right;">14:21</span>
    </div>
    <div id="container">
        <ul class="content">
          <li v-for="(item, index) in messageList">
            <img src="/static/icon/apple.png" :class="'img'+(item.isSelf?'right':'left')">
            <!--<img :src="'/apple.png'+(item.isSelf?'r.png':'l.png')" :class="'img'+(item.isSelf?'right':'left')">-->
            <span :class="'span'+(item.isSelf?'right':'left')">{{item.message}}</span>
          </li>
        </ul>
    </div>
    <div class="footer" style="margin-bottom: 50px; margin-top: auto">
      <!-- 添加输入内容 -->
      <input id="text" type="text" placeholder="说点什么吧..." v-model="inputValue" @keyup.enter="chat">
      <!-- 给发送也绑定一个事件 -->
      <span id="btn" @click="chat">发送</span>
    </div>
  </div>

</template>

<script>
  import {Field, Col, Row, Button} from 'vant'

  export default {
    components: {
      VanField: Field,
      VanCol: Col,
      VanRow: Row,
      VanButton: Button
    },
    data() {
      return {
        inputValue: '',
        //聊天窗口内容
        messageList: [], //输入内容,双向数据绑定,
        path: "ws://39.106.121.52:8088/mstore/ws/robot",
        socket: ""
      }
    },
    methods: {
      chat() {
        console.log(this.inputValue);
        console.log(this);
        // 二.获取自己输入内容,将内容渲染到页面
        this.messageList.push({
          message: this.inputValue,
          isSelf: true
        });
        //if(this.inputValue===null)
        this.socket.send(this.inputValue);
        this.inputValue = '';  //最后清除文本框
      },
      init: function () {
        if (typeof (WebSocket) === "undefined") {
          alert("您的浏览器不支持socket")
        } else {
          // 实例化socket
          this.socket = new WebSocket(this.path);
          // 监听socket连接
          this.socket.onopen = this.open;
          // 监听socket错误信息
          this.socket.onerror = this.error;
          // 监听socket消息
          this.socket.onmessage = this.getMessage
        }
      },
      open: function () {
        console.log("socket连接成功")
      },
      error: function () {
        console.log("连接错误")
      },
      getMessage: function (msg) {
        this.messageList.push({
          message: msg.data,
          isSelf: false
        });
        this.moveToBottom();
        //console.log(msg.data)
      },
      send: function () {
        this.socket.send(this.inputValue)
      },
      close: function () {
        console.log("socket已经关闭")
      },
      moveToBottom(){
       // document.getElementById("container").scrollIntoView(true);
      }
    },
    mounted() {
      this.init();
    },
    destroyed() {
      // 销毁监听
      this.socket.onclose = this.close
    }
  }
</script>

<style scoped>
  /**重置标签默认样式*/
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    font-family: '微软雅黑'
  }

  #container {
    width: 100%;
    height: 80%;
    background: #eee;
    position: relative;
    overflow: hidden;
  }

  .header {
    background: #000;
    height: 40px;
    color: #fff;
    line-height: 34px;
    font-size: 15px;
    padding: 0 5px;
  }

  .footer {
    width: 100%;
    height: 50px;
    background: #666;

    padding: 1px;
  }

  .footer input {
    width: 78%;
    height: 45px;
    outline: none;
    font-size: 18px;
    text-indent: 10px;
    position: absolute;
    border-radius: 6px;
  }

  .footer span {
    display: inline-block;
    width: 66px;
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

  /* #user_face_icon {
    display: inline-block;
    background: red;
    width: 60px;
    height: 60px;
    border-radius: 30px;
    position: absolute;
    bottom: 6px;
    left: 14px;
    cursor: pointer;
    overflow: hidden;
  } */
  img {
    width: 30px;
    height: 30px;
  }

  .content {
    font-size: 20px;
    width: 100%;
    /*height: 600px;*/
    overflow: auto;

  }

  .content li {
    margin-top: 10px;
    width: 100%;
    display: block;
    clear: both;
    overflow: hidden;
  }

  .content li img {
    float: left;
  }

  .content li span {
    background: #7cfc00;
    padding: 10px;
    border-radius: 10px;
    float: left;
    margin: 6px 10px 0 10px;
    max-width: 100%;
    border: 1px solid #ccc;
    box-shadow: 0 0 3px #ccc;
  }

  .content li img.imgleft {
    float: left;
  }

  .content li img.imgright {
    float: right;
  }

  .content li span.spanleft {
    float: left;
    background: #fff;
  }

  .content li span.spanright {
    float: right;
    background: #7cfc00;
  }
  #container::-webkit-scrollbar {
    overflow: auto;
    border-width: 1px;
  }

</style>
