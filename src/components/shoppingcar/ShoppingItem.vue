<template>
  <div id="myCart">
    <van-check-box-group v-model="checkResult">
      <van-row v-for="(item,index) in orderCopy" :key="index">
        <van-col span="2">
          <van-check-box class="checkClass" :id="index" :name="orderCopy[index].id"
                         @click="computePrice1(index)"/>
        </van-col>
        <van-col span="22">
          <van-swipe-cell>
            <van-card
              :num=orderCopy[index].num
              :price=orderCopy[index].price
              :desc=orderCopy[index].desc
              :title=orderCopy[index].title
              thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
            >
              <div slot="footer">
                <!--id=10086 step="1"   :value="order[index].num"-->
                <van-stepper v-model="orderCopy[index].num" name="aaa" @change="stepperChange($event,index)"/>
              </div>
            </van-card>
            <van-button
              slot="right"
              square
              text="删除"
              type="danger"
              class="delete-button"
              @click="swipeDel(index)"
            />
          </van-swipe-cell>
        </van-col>
      </van-row>
    </van-check-box-group>
  </div>
</template>

<script>
  import {Card, Button, Checkbox, CheckboxGroup, Cell, Stepper, SwipeCell, Col, Row, Toast, Notify} from 'vant';
  import PubSub from 'pubsub-js'
  import Axios from "axios";
  import {getLocalStorage, setLocalStorage} from "../../util/utils";

  export default {
    components: {
      VanCard: Card,
      VanButton: Button,
      VanCheckBox: Checkbox,
      VanCheckBoxGroup: CheckboxGroup,
      VanCell: Cell,
      VanStepper: Stepper,
      VanSwipeCell: SwipeCell,
      VanCol: Col,
      VanRow: Row,
      PubSub: PubSub
    },
    data() {
      return {
        imgUrl: './static/ani.ico',
        checkResult: [],
        totalPrice: 0,
        isCheck: Boolean,
        orderCopy: [],
        checkedOrder: [],
        userId: '',
        product1: {
          product1: [{
            "check": 1,
            "desc": "牛肉",
            "id": 5,
            "num": 3,
            "pStatus": 1,
            "pid": 8004,
            "price": 22.00,
            "title": "新鲜牛肉",
            "userId": "4fdcaa35ccea4cb5b62926189c95bf45"
          }],
          price: "0.00"
        }
      }
    },
    methods: {
      computePrice() {
        this.$emit('computeTotalPrice', this.orderCopy);
      },
      computePrice1(index) {
        this.orderCopy[index].check = !this.orderCopy[index].check;
      },
      stepperChange(e, index) {
        this.orderCopy[index].num = e;
      },
      swipeDel(index) {
        this.orderCopy.splice(index, 1);
        this.$emit('swipeDel', index);
      },
      computePriceTemp() {
        let tempArr = [];
        let tempTotalPrice = 0;
        for (let i = 0; i < this.orderCopy.length; i++) {
          if (this.orderCopy[i].check === true) {
            tempArr.push(this.orderCopy[i]);
          }
        }
        this.checkedOrder = tempArr;
        if( this.orderCopy.length===this.checkedOrder.length){
          PubSub.publish("isAllCheck",true);
        }else if(this.orderCopy.length!==this.checkedOrder.length){
          PubSub.publish("isAllCheck",false);
        }
       // console.log("选择的订单为" + JSON.stringify(this.checkedOrder));
        for (let j = 0; j < tempArr.length; j++) {
          tempTotalPrice += tempArr[j].price * tempArr[j].num;
        }
        this.totalPrice = tempTotalPrice * 100;
        this.product1.product1=[];
        for(let j=0;j<this.checkedOrder.length;j++){
          let product1= {
            "check": 1,
            "desc": "",
            "id": 0,
            "num": 0,
            "pStatus": 1,
            "pid": 0,
            "price": 0.00,
            "title": "",
            "userId": ""
          };
          product1.id=this.checkedOrder[j].id;
          product1.desc=this.checkedOrder[j].desc;
          product1.title=this.checkedOrder[j].title;
          product1.num=this.checkedOrder[j].num;
          product1.pStatus=this.checkedOrder[j].pStatus;
          product1.pid=this.checkedOrder[j].pid;
          product1.userId=this.checkedOrder[j].userId;
          product1.price=this.checkedOrder[j].price;
          product1.check=1;
          this.product1.product1.push(product1);
        }
        let totalTem=this.totalPrice/100;
        this.product1.price=totalTem.toFixed(2);
       // console.log(JSON.stringify(this.product1));
        //console.log("价格计算完成" + this.totalPrice);
      },
      addItemToCard(data) {
        let item = sessionStorage.getItem('userInfo-session');
        if (item !== null) {
          let parse = JSON.parse(item);
          this.userId = parse.id;
        } else {
          Notify({type: 'danger',duration:1000, message: "请先登录！"});
        }
        let flag = true;
        if (flag) {
          for (let i = 0; i < this.orderCopy.length; i++) {
            if (this.orderCopy[i].id === data.id) {
              this.orderCopy[i].num += 1;
              flag = false;
              break;
            }
          }
        } else {
          let orderCopyTemp = {
            id: 1,
            price: 1,
            num: 1,
            check: true,
            status: 1,
            userId: this.userId,
            title: '',
            pid: '',
            pStatus: 1,
            desc: ''
          };
          orderCopyTemp.id = data.id;
          orderCopyTemp.price = data.price;
          orderCopyTemp.num = 1;
          orderCopyTemp.check = false;
          orderCopyTemp.status = 1;
          orderCopyTemp.userId = this.userId;
          orderCopyTemp.title = data.title;
          orderCopyTemp.pid = data.pid;
          orderCopyTemp.pStatus = data.pStatus;
          orderCopyTemp.desc = data.desc;
          this.orderCopy.push(orderCopyTemp);
        }
      },
      toConfirmPage(){
        this.$router.replace('/shoppingCarConfirm')
      }
    },
    watch: {
      isCheck: function (newValue) {
        if (newValue) {
          this.checkResult = [];
          for (let i = 0; i < this.orderCopy.length; i++) {
            this.checkResult.push(this.orderCopy[i].id);
            this.orderCopy[i].check = true;
          }
        } else {
          for (let i = 0; i < this.orderCopy.length; i++) {
            this.orderCopy[i].check = false;
          }
          this.checkResult = [];
        }
      },
      orderCopy: {
        handler(newValue, oldValue) {
          this.computePriceTemp();//发送到父容器
        },
        deep: true
      },
      totalPrice: function (newValue) {
        PubSub.publish("newTotalPrice", newValue);
      }
    },
    mounted() {
      PubSub.subscribe("isCheck", (msg, isCheck) => {
        this.isCheck = isCheck;
      });
      PubSub.subscribe("AddToCart", (msg, data) => {
        this.addItemToCard(data);
      });
      PubSub.subscribe("goCheck", (msg, data) => {
        if(data==="1"){
         setLocalStorage("cart-to-pay",this.product1,720);
          this.$router.replace("/submitOrder");
        }
        //console.log("收到提交订单请求"+data);
        //this.toConfirmPage();
 /*       Axios.post("http://127.0.0.1:8088/mstore/aliPay/aliWapPay", this.product1).then((response) => {
          let res = response.data;
          if (res.code === 200) {
            //支付宝支付
            const div = document.createElement('div');
            div.innerHTML = res.data; //此处form就是后台返回接收到的数据
            document.body.appendChild(div);
            document.forms[0].submit()
          } else {
            Notify({type: 'danger', message: res.msg});
          }
        });*/
      });
    },
    created() {
      let user = getLocalStorage("user-login-info");
      if(user===null){
        Toast({message:"请登录！",duration:1000})
      }else {
        let params = new URLSearchParams();
        params.append('id', user.id);
        this.post("listCar",params).then(response=>{
          let res = response.data;
          if (res.code === 200) {
            for (let i = 0; i < res.data.length; i++) {
              let tempOrder = {
                id: res.data[i].id,
                pid: res.data[i].pid,
                price: res.data[i].price,
                num: res.data[i].num,
                desc: res.data[i].desc,
                title: res.data[i].title,
                pStatus: res.data[i].pStatus,
                userId:res.data[i].userId,
                check: false
              };
              this.orderCopy.push(tempOrder);
            }
          } else {
            Notify({type: 'danger',duration:1500, message: res.msg});
          }
        });
      }
    }
  }

</script>

<style scoped>
  .delete-button {
    height: 100%;
  }

  .checkClass {
    margin-top: 50px;
  }

  #myCart {
    overflow: auto;
    height: 500px;
    width: auto;
  }

  #myCart::-webkit-scrollbar {
    border-width:1px;
  }

</style>
