<template>
  <div style="height: auto;">


    <van-row>
      <van-col span="5">
        <div>
          <van-image
            round
            width="4rem"
            height="4rem"
            fit="cover"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
        </div>
      </van-col>
      <van-col span="19">
        <div><p>{{name}}</p></div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
  import {Image} from 'vant';
  import {Divider, Col, Row} from 'vant';
  import PubSub from 'pubsub-js'
  import {getLocalStorage} from "../../util/utils";

  export default {
    components: {
      VanImage: Image,
      VanDivider: Divider,
      VanRow: Row,
      VanCol: Col,
      PubSub: PubSub
    },
    data() {
      return {
        name: '',
        email: ''
      }
    },
    mounted() {
      let item = getLocalStorage("user-login-info"); //获取本地用户信息
      if(item!==null){
        this.name = item.name;
      }else {
        this.name="请登录"
      }
    }
  }
</script>

<style scoped>

</style>
