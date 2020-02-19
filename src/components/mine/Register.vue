<template>
<div style="margin-top: 10%">
  <van-form v-model="user" >
    <van-field
      v-model="user.name"
      name="name"
      label="用户名"
      placeholder="用户名"
      :rules="[{ required: true, message: '请填写用户名' }]"
    />
    <van-field
      v-model="user.password"
      type="password"
      name="password"
      label="密码"
      placeholder="密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
    <van-field
      v-model="user.email"
      name="email"
      label="邮箱"
      placeholder="请输入邮箱"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
    <van-field
      v-model="user.verifyCode"
      center
      clearable
      name="verifyCode"
      label="邮箱验证码"
      placeholder="请输入邮箱收到的验证码"
    >
      <van-button slot="button" size="small" type="default" @click="sendMailCode">发送验证码</van-button>
    </van-field>
   <!-- <van-field
      readonly
      clickable
      name="calendar"
      :value="value"
      label="出生日期"
      placeholder="点击选择日期"
      @click="showCalendar = true"
    />-->
    <van-calendar v-model="showCalendar" @confirm="onConfirm" />
    <div style="margin: 16px;">
      <van-button round block type="info" @click="register" native-type="submit">
        注册
      </van-button>
    </div>
  </van-form>

</div>
</template>

<script>
  import {Field, Button, Form, Calendar, Notify} from 'vant';
  import Axios from 'axios'
  export default {
    name: "MineRegister",
    components: {
      VanField: Field,
      VanButton:Button,
      VanForm:Form,
      VanCalendar:Calendar,
      Axios:Axios,
    },data(){
      return{
        user:{
          sms:'',
          name:'',
          password:'',
          email:'',
          verifyCode:''
        },
        value: '',
        showCalendar: false,

      }
    },methods: {
      register() {
        //console.log('submit', values);
        //let params = new URLSearchParams();
        //let user = JSON.stringify(values);
        console.log("user"+JSON.stringify(this.user));
        Axios.post("http://39.106.121.52:8088/mstore/register",this.user).then((response)=>{
          //  Axios.post("http://127.0.0.1:8088/mstore/register",this.user).then((response)=>{
          let res = response.data;
          //Notify({ type: 'success', message: '邮件发送成功' });
          if(res.code===200){
            Notify({ type: 'success', message: res.msg });
            this.$router.push({ path:'/mine'  });
          }else {
            Notify({ type: 'danger', message: res.msg  });
          }
        });
      },
      onConfirm(date) {
        this.value = `${date.getMonth() + 1}/${date.getDate()}`;
        this.showCalendar = false;
      },
      sendMailCode(){
        let params = new URLSearchParams();
        params.append('username', this.user.name);
        params.append('email',this.user.email);
        Axios.post("http://39.106.121.52:8088/mstore/getMailCode",params).then((response)=>{
        //   Axios.post("http://127.0.0.1:8088/mstore/getMailCode",params).then((response)=>{
          let res = response.data;
          if(res.code===200){
            Notify({ type: 'success', message: res.data });
          }else {
            Notify({ type: 'danger', message: res.data  });
          }
          console.log(res);
        });
      }
    }
  }
</script>

<style scoped>

</style>
