<template>
  <div>
    <van-row>
      <van-col span="6">
        <van-sidebar v-model="activeKey" @change="onChange">
          <van-sidebar-item v-for='item in siderbarData' :key="item" :title=item />
        </van-sidebar>
      </van-col>
      <van-col span="18">
        <CategorySwipe/>
        <p><span style="font-size: small; ">新鲜水果，店长推荐</span></p>
        <Recommend :recommendData="recommendData"/>
        <p><span style="font-size: small; ">快速加速购物车</span></p>
        <Items/>
      </van-col>
    </van-row>
  </div>
</template>

<script>
  import {Sidebar, SidebarItem,Notify} from 'vant';
  import {Row, Col} from 'vant';
  import Recommend from '../recommend/Recommend'
  import CategorySwipe from '../ctegorySwipe/CategorySwipe.vue'
  import Items from '../item/Items'

  export default {
    components: {
      VanSidebar: Sidebar,
      VanSidebarItem: SidebarItem,
      Notify: Notify,
      VanRow: Row,
      VanCol: Col,
      Recommend: Recommend,
      CategorySwipe: CategorySwipe,
      Items:Items
    },
    props:{
      siderbarData:Array
    },
    data() {
      return {
        activeKey: 0,
        recommendData:["苹果","香蕉","梨子","葡萄","西瓜","橙子","荔枝","奇异果"]
      }
    },
    methods:{
      onChange(index) {
        //Notify({ type: 'primary', message: this.siderbarData[index] });
        if(this.siderbarData[index]==="新鲜水果"){
          this.recommendData=["苹果","香蕉","梨子","葡萄","西瓜","橙子","荔枝","奇异果"]
        }else if(this.siderbarData[index]==="绿色蔬菜"){
          this.recommendData=["菠菜","油菜","生菜","青菜","土豆","萝卜","西红柿","青椒"]
        }else if(this.siderbarData[index]==="粮油副食"){
          this.recommendData=["大豆油","菜籽油","花生油","玉米油","东北大米","鄱阳湖大米","面条","米粉"]
        }
      },
    }
  }

</script>

<style scoped>

</style>
