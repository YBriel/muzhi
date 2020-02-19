<template>
<div>
  <van-grid>
    <van-grid-item v-for='(item,index) in recommendData' :key="item"  :text=item :icon=picArr[index] @click="clickTest" />
  </van-grid>
</div>
</template>

<script>
  import { Grid, GridItem,Icon,Divider  } from 'vant';
  import siderbar from "../siderbar/siderbar";
  export default {
    components:{
      VanGrid:Grid,
      VanGridItem:GridItem,
      VanIcon:Icon,
      VanDivider:Divider,
      siderbar: siderbar
    },

    data() {
      return {
        picArr:["./static/icon/apple.png","./static/icon/banana.png","./static/icon/firedragon.png","./static/icon/mongo.png","./static/icon/orange.png",
          "./static/icon/peach.png","./static/icon/watermelon.png","./static/icon/pear.png"]
      }
    },
    props: {
      recommendData: Array
    },
    methods:{
      clickTest(){
        console.log(this.picArr)
      }
    }

  }
</script>

<style scoped>

</style>
