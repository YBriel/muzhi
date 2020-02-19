<template>
  <van-form @submit="onSubmit">
    <van-field
      v-model="email"
      name="email"
      label="email"
      placeholder="email"
      :rules="[{ required: true, message: '请填写email' }]"
    />
    <van-field
      v-model="password"
      type="password"
      name="密码"
      label="密码"
      placeholder="密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
    <div style="margin: 16px;">
      <van-button round block type="info" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>
</template>

<script>
  import {Button, Form, Field, Notify} from 'vant'
  import Axios from "axios";
  import PubSub from 'pubsub-js'
  export default {
    components: {
      VanButton: Button,
      VanForm: Form,
      VanField: Field,
      PubSub:PubSub
    },
    name: "Login",
    data(){
      return{
        email:'',
        password:''
      }
    },
    methods:{
      onSubmit(values) {
        let params = new URLSearchParams();
        params.append('email', this.email);
        params.append('password',this.password);
        Axios.post("http://127.0.0.1:8088/mstore/login",params).then((response)=>{
       // Axios.post("http://39.106.121.52:8088/mstore/login",params).then((response)=>{
          let res = response.data;
          if(res.code===200){
            Notify({ type: 'success', message: "登录成功！" });
            console.log(res.data);
            this.$router.push({ path:'/mine'});
            sessionStorage.setItem("userInfo-session",JSON.stringify(res.data));
          }else {
            Notify({ type: 'danger', message: res.data  });
          }
        });
        console.log('submit', values);
      },

    }
  }
</script>

<style scoped>

</style>
