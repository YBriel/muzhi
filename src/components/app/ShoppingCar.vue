<template>
  <div>
    <div>
      <van-nav-bar
        title="我的购物车"
        left-arrow/>
    </div>
    <div>
      <ShoppingItems :order="order" @computeTotalPrice="computeTotalPrice" :orderCopy="orderCopy" @swipeDel="swipeDel" />
      <ShoppingSubmit/>
    </div>
  </div>

</template>

<script>
  import ShoppingItems from "../shoppingcar/ShoppingItem";
  import ShoppingSubmit from "../shoppingcar/ShoppingSubmit";
  import Footer from "../footer/Footer";

  import {NavBar} from 'vant';
    export default {
      components:{
        ShoppingItems:ShoppingItems,
        ShoppingSubmit:ShoppingSubmit,
        VanNavBar:NavBar,
        Footer:Footer
      },
      data() {
        return {
          imgUrl: './static/ani.ico',
          totalPrice: 0,
          orderCopy: [],
          order: [{
            id: 10086,
            price: 200,
            num: 1,
            desc: "中国移动",
            title: "限购一件",
          }, {
            id: 10000,
            price: 30000,
            num: 1,
            desc: "中国电信",
            title: "限购一件",
          },
            {
              id: 10001,
              price: 200.00,
              num: 1,
              desc: "中国联通",
              title: "限购一件",
            },
            {
              id: 10002,
              price: 200,
              num: 1,
              desc: "中国联通",
              title: "限购一件",
            }]
        }
      },
      methods:{
        computeTotalPrice(orderCopy) {
          //未选中任何商品
          console.log("接收到事件"+JSON.stringify(orderCopy));
         /*let orderCopy=this.orderCopy;
          for (let i = 0; i < orderCopy.length; i++) {
            if (orderCopy[i].check === true) {
              this.totalPrice += orderCopy[i].num * orderCopy[i].price;
            }
            console.log(this.orderCopy);
          }
          console.log(this.totalPrice);*/
        },
        swipeDel(index){
         // console.log("index是"+index);
          this.order.splice(index,1);
          //console.log(JSON.stringify(this.orderCopy));
        }
      },

      mounted() {
        let orderElement = this.order;
        for (let i = 0; i < orderElement.length; i++) {
          let orderCopyTemp = {
            id: 1,
            price: 1.0,
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
        }
      },

    }
</script>

<style scoped>

</style>
