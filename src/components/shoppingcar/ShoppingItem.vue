<template>
  <div>
    <!--  <van-button type="default" @click="printResult()">默认按钮</van-button>-->

    <van-check-box-group v-model="checkResult" >
      <van-row v-for="(item,index) in orderCopy" :key="index">
        <van-col span="2">
          <van-check-box class="checkClass" :id="index" :name="orderCopy[index].id"
                         @click="computePrice1(index)"/>
        </van-col>
        <van-col span="21">
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
        orderCopy:[]
      }
    },
    methods: {
      computePrice() {
        this.$emit('computeTotalPrice', this.orderCopy);
      },
      computePrice1(index) {
        //console.log("index是"+index);

        this.orderCopy[index].check = !this.orderCopy[index].check;
        if(this.orderCopy.length===1){
          PubSub.publish("isAllCheck",this.orderCopy[index].check);
        }
      },
      stepperChange(e,index) {
        this.orderCopy[index].num=e;
        //console.log(JSON.stringify(this.orderCopy.length));
      },
      swipeDel(index) {
        this.orderCopy.splice(index, 1);
        this.$emit('swipeDel', index);
      },
      computePriceTemp(){
        let tempArr = [];
        let tempTotalPrice=0;
        for (let i = 0; i < this.orderCopy.length; i++) {
          if (this.orderCopy[i].check === true) {
            tempArr.push(this.orderCopy[i]);
          }
        }
        for (let j = 0; j < tempArr.length; j++) {
          tempTotalPrice += tempArr[j].price*tempArr[j].num;
        }
        this.totalPrice=tempTotalPrice*100;
        console.log("价格计算完成" + this.totalPrice);
      },
      addItemToCard(data){
        let orderCopyTemp = {
          id: 1,
          price: 1,
          num: 1,
          check: true,
          status: 1
        };
        orderCopyTemp.id = data.id;
        orderCopyTemp.price = data.price;
        orderCopyTemp.num = 1;
        orderCopyTemp.check = false;
        orderCopyTemp.status = 1;
        this.orderCopy.push(orderCopyTemp);
      }
    },
    watch: {
      isCheck: function (newValue) {
        if (newValue) {
          this.checkResult = [];
          for (let i = 0; i < this.orderCopy.length; i++) {
            this.checkResult.push(this.orderCopy[i].id);
            this.orderCopy[i].check=true;
          }
        } else {
          for (let i = 0; i < this.orderCopy.length; i++) {
            this.orderCopy[i].check=false;
          }
          this.checkResult = [];
        }
       // console.log(JSON.stringify(this.orderCopy));
      },
      orderCopy: {
        handler(newValue, oldValue) {
            this.computePriceTemp();//发送到父容器
        },
        deep: true
      },
      totalPrice:function (newValue) {
        PubSub.publish("newTotalPrice",newValue);
      }
    },
    mounted() {
      /*let orderElement = this.order;
      for (let i = 0; i < orderElement.length; i++) {
        let orderCopyTemp = {
          id: 1,
          price: 1,
          num: 1,
          check: true,
          status: 1
        };
        orderCopyTemp.id = orderElement[i].id;
        orderCopyTemp.price = orderElement[i].price;
        orderCopyTemp.num = orderElement[i].num;
        orderCopyTemp.check = false;
        orderCopyTemp.status = 1;
        this.orderCopy.push(orderCopyTemp);
      }*/
      PubSub.subscribe("isCheck", (msg, isCheck) => {
        this.isCheck = isCheck;
      });
      PubSub.subscribe("AddToCart", (msg, data) => {
        this.addItemToCard(data);
       // console.log("新增一体"+JSON.stringify(data)+"----------------");
      });
    },
    created() {
      let params = new URLSearchParams();
      params.append('id', "4fdcaa35ccea4cb5b62926189c95bf45");
      Axios.post("http://39.106.121.52:8088/mstore/listCar", params).then((response) => {
        let res = response.data;
        console.log(res);
        if (res.code === 200) {
          for(let i=0;i<res.data.length;i++){
            let tempOrder={
              id: res.data[i].id,
              price: res.data[i].price,
              num: res.data[i].num,
              desc: res.data[i].desc,
              title: res.data[i].title,
              check:false
            };
            this.orderCopy.push(tempOrder);
          }
          console.log(JSON.stringify( this.orderCopy));
        } else {
          Notify({type: 'danger', message: res.msg});
        }
      });
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

</style>
