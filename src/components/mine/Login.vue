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
      autocomplete=false
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
  import {post} from "../../util/axiosUtil";
  import {setLocalStorage} from "../../util/utils";
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
        post("login",params).then(response=>{
          let res = response.data;
          if(res.code===200){
            Notify({ type: 'success',duration:1500, message: "登录成功！" });
            setLocalStorage("user-login-info",res.data,720); //缓存用户数据到localstorage 一个月
            this.$router.push({ path:'/mine'});
          }else {
            Notify({ type: 'danger',duration:1500, message: "账号或密码错误！"  });
          }
        });
      }
    }
  }
</script>

<style scoped>

</style>
