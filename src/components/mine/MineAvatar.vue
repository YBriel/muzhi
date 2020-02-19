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
      let item = sessionStorage.getItem('userInfo-session');
      if(item!==undefined){
        let parse = JSON.parse(item);
        //console.log(parse);
        this.name = parse.name;
      }else {
        this.name="请登录"
      }

/*      console.log("item" + JSON.stringify(item));
      PubSub.subscribe("UserNameToAvatar", (msg, data) => {
        if (data === "success") {
          let item = sessionStorage.getItem('userInfo-session');
          console.log("item" + JSON.stringify(item));
          this.name = item;
        }
      })*/
    }
  }
</script>

<style scoped>

</style>
