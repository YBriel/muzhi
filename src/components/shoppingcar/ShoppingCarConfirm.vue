<template>
  <div>
    <van-nav-bar
      title="填写订单"
      left-text=""
      left-arrow
    />
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
    />
    <van-list v-for="(item,index) in productFinal" :key="index">
      <van-panel :title="productFinal[index].title" :desc="productFinal[index].desc"
                 :status="productFinal[index].num.toString()"/>
    </van-list>
    <div class="van-address-item" >
      <div role="radio" tabindex="0" aria-checked="true" class="van-radio">
        <div class="van-radio__icon van-radio__icon--round van-radio__icon--checked" style="font-size: 18px;"><i
          class="van-icon van-icon-success"><!----></i></div>
        <span class="van-radio__label"><div class="van-address-item__name">张三 13000000000<span
          class="van-tag van-tag--round van-tag--danger van-address-item__tag">默认</span></div><div
          class="van-address-item__address">浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室</div></span></div>
    </div>
  </div>
</template>

<script>
  import {Panel, Button, NavBar, List, AddressList, Toast} from 'vant';
  import PunSub from 'pubsub-js'

  export default {
    components: {
      VanPanel: Panel,
      VanButton: Button,
      VanNavBar: NavBar,
      VanList: List,
      VanAddressList: AddressList
    },
    data() {
      return {
        productFinal: [],
        totalPrice: '',
        chosenAddressId: '1',
        list: [
          {
            id: '1',
            name: '张三',
            tel: '13000000000',
            address: '江西省南昌市广兰大道 418 东华理工大学'
          }
        ]
      }

    },
    name: "ShoppingCarConfirm",
    mounted() {
      PunSub.subscribe("product1", (msg, data) => {
        let parse = JSON.parse(data);
        this.totalPrice = parse.price;
        this.productFinal = parse.product1;
        console.log(JSON.stringify(parse.product1));
      })
    },
    methods: {
      onAdd() {
        Toast('新增地址');
      },
      onEdit(item, index) {
        Toast('编辑地址:' + index);
      }
    }
  }
</script>

<style scoped>

</style>
