<template>
  <div>
    <Header/>
    <van-row>
      <van-col span="6">
       <VanSidebar :siderbarData="siderbarData" @siderChange="siderChange" />
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
  import Header from '../header/Header'
  import {Row, Col, Sidebar, SidebarItem, Notify} from 'vant';
  import Recommend from '../../components/category/recommend/Recommend'
  import CategorySwipe from '../../components/category/ctegorySwipe/CategorySwipe.vue'
  import Items from '../../components/category/item/Items'
  import siderbar from "../category/siderbar/siderbar";


  export default {
    components: {
      Header:Header,
      VanSidebar: siderbar,
      VanSidebarItem: SidebarItem,
      Notify: Notify,
      VanRow: Row,
      VanCol: Col,
      Recommend: Recommend,
      CategorySwipe: CategorySwipe,
      Items:Items
    },
    data() {
      return {
        siderbarData:["新鲜水果","绿色蔬菜","粮油副食","调味品","根茎菜","蛋类","豆制品","肉类","菌类","海鲜"],
        siderbarGoods:[{
          id:10088,
          desc:"描述信息",
          title:"商品标题",
          price:200,
          thumb:"https://img.yzcdn.cn/vant/t-thirt.jpg"
        },
          {
            id:10089,
            desc:"商品一",
            title:"好吃的鄱阳湖大米",
            price:200,
            thumb:"https://img.yzcdn.cn/vant/t-thirt.jpg"
          }],
        recommendData:["苹果","香蕉","梨子","葡萄","西瓜","橙子","荔枝","奇异果"]
      }
    },
    methods:{
      siderChange(index){
        //console.log("收到消息");
        if(this.siderbarData[index]==="新鲜水果"){
          this.recommendData=["苹果","香蕉","梨子","葡萄","西瓜","橙子","荔枝","奇异果"]
        }else if(this.siderbarData[index]==="绿色蔬菜"){
          this.recommendData=["菠菜","油菜","生菜","青菜","土豆","萝卜","西红柿","青椒"]
        }else if(this.siderbarData[index]==="粮油副食"){
          this.recommendData=["大豆油","菜籽油","花生油","玉米油","东北大米","鄱阳湖大米","面条","米粉"]
        }
      }
    }
  }
</script>

<style scoped>

</style>
