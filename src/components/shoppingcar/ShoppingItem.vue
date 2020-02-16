<template>
  <div>
    <!--  <van-button type="default" @click="printResult()">默认按钮</van-button>-->

    <van-check-box-group v-model="checkResult" :value=checkResult>
      <van-row v-for="(item,index) in orderCopy" :key="item.id">
        <van-col span="2">
          <van-check-box class="checkClass" :id="index" :name="order[index].id"
                         @click="computePrice1(index)"/>
        </van-col>
        <van-col span="21">
          <van-swipe-cell>
            <van-card
              :num=order[index].num
              :price=order[index].price
              :desc=order[index].desc
              :title=order[index].title
              thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
            >
              <div slot="footer">
                <!--id=10086 step="1"   :value="order[index].num"-->
                <van-stepper v-model="order[index].num" :max="order.length" name="aaa" @plus="stepperChange(index)"/>
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
  import {Card, Button, Checkbox, CheckboxGroup, Cell, Stepper, SwipeCell, Col, Row} from 'vant';
  import PubSub from 'pubsub-js'

  export default {
    props: {
      order: {
        Type: Array,
        required: true
      },
      orderCopy: Array
    },
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
        isCheck: Boolean
      }
    },
    methods: {
      computePrice() {
        this.$emit('computeTotalPrice', this.orderCopy);
      },
      computePrice1(index) {
        //console.log(index);
        // this.totalPrice += 100;
        this.orderCopy[index].check = !this.orderCopy[index].check;
       /* console.log(JSON.stringify(this.orderCopy));
        PubSub.publish("totalPrice", this.totalPrice)*/
        //console.log(event);
      },
      checkChange() {
        alert("000");
      },
      stepperChange(index) {
        //console.log(index);
        // console.log(this[i]);

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
          tempTotalPrice += tempArr[j].price;

        }
        this.totalPrice=tempTotalPrice;
        console.log("价格计算完成" + this.totalPrice);
      }
    },
    computed: {
      /*   checkResult:function () {
           console.log("checkResult变化了"+this.checkResult);
         }*/
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
      },
      orderCopy: {
        handler(newValue, oldValue) {
            this.computePriceTemp();
        },
        deep: true
      },
      totalPrice:function (newValue) {
        PubSub.publish("newTotalPrice",newValue);
      }
    },
    mounted() {
      PubSub.subscribe("isCheck", (msg, isCheck) => {
        this.isCheck = isCheck;
      })
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
