<template>
  <div>
    <Header/>
    <van-row>
      <van-col span="6">
        <VanSidebar :siderbarData="siderbarData" @siderChange="siderChange"/>
      </van-col>
      <van-col span="18">
        <CategorySwipe/>
        <p><span style="font-size: small; ">新鲜水果，店长推荐</span></p>
        <Recommend :recommendData="recommendData"/>
        <p><span style="font-size: small; ">快速加速购物车</span></p>
        <Items :siderbarGoods="siderbarGoods"/>
      </van-col>
    </van-row>
  </div>
</template>

<script>
  import Header from '../body/Header'
  import {Row, Col, Sidebar, SidebarItem, Notify} from 'vant';
  import Recommend from '../../components/category/recommend/Recommend'
  import CategorySwipe from '../../components/category/ctegorySwipe/CategorySwipe.vue'
  import Items from '../../components/category/item/Items'
  import siderbar from "../category/siderbar/siderbar";
  import Axios from "axios";


  export default {
    components: {
      Header: Header,
      VanSidebar: siderbar,
      VanSidebarItem: SidebarItem,
      Notify: Notify,
      VanRow: Row,
      VanCol: Col,
      Recommend: Recommend,
      CategorySwipe: CategorySwipe,
      Items: Items
    },
    data() {
      return {
        siderbarData: ["新鲜水果", "绿色蔬菜", "粮油副食", "调味品", "根茎菜", "蛋类", "豆制品", "肉类", "菌类", "海鲜"],
        siderbarGoods: [{
          id: 10088,
          desc: "描述信息",
          title: "商品标题",
          price: 200,
          thumb: "https://img.yzcdn.cn/vant/t-thirt.jpg"
        },
          {
            id: 10089,
            desc: "商品一",
            title: "好吃的鄱阳湖大米",
            price: 200,
            thumb: "https://img.yzcdn.cn/vant/t-thirt.jpg"
          }],
        recommendData: ["苹果", "香蕉", "梨子", "葡萄", "西瓜", "橙子", "荔枝", "奇异果"],
        pageParams: {
          currentPage: 1,
          pageSize: 5
        }
      }
    },
    methods: {
      siderChange(index) {
        //console.log("收到消息");
        if (this.siderbarData[index] === "新鲜水果") {
          this.recommendData = ["苹果", "香蕉", "梨子", "葡萄", "西瓜", "橙子", "荔枝", "奇异果"]
        } else if (this.siderbarData[index] === "绿色蔬菜") {
          this.recommendData = ["菠菜", "油菜", "生菜", "青菜", "土豆", "萝卜", "西红柿", "青椒"]
        } else if (this.siderbarData[index] === "粮油副食") {
          this.recommendData = ["大豆油", "菜籽油", "花生油", "玉米油", "东北大米", "鄱阳湖大米", "面条", "米粉"]
        }
        let params = new URLSearchParams();
        params.append("limit", this.pageParams.pageSize);
        params.append("currentPage", this.pageParams.currentPage);
        params.append("parentId", index+1);
        //let user = JSON.stringify(values);
       // Axios.post("http://127.0.0.1:8088/mstore/listByProductId", params).then((response) => {
        this.post("listByProductId",params).then(response=> {
          let res = response.data;
          if (res.code === 200) {
            let result = res.data;
            this.siderbarGoods=[];
            for (let i = 0; i < result.length; i++) {
              //this.siderbarGoods=[];
              let goodsTemp = {
                id: 1,
                desc: "",
                title: "",
                price: 0,
                thumb: ""
              };
              goodsTemp.id=result[i].pid;
              goodsTemp.desc=result[i].description;
              goodsTemp.title=result[i].title;
              goodsTemp.price=result[i].price;
              this.siderbarGoods.push(goodsTemp);
            }
          } else {
            Notify({type: 'danger', message: "抱歉，系统开小差了"});
          }
        });
      }
    },
    mounted() {
      this.siderChange(0);

    }
  }
</script>

<style scoped>

</style>
