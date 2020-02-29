<template>
  <div>
    <van-grid>
      <van-grid-item icon="./static/index/sxa.png" text="我的物业"/>
      <van-grid-item icon="./static/index/tbby.png" text="表扬投诉"/>
      <van-grid-item icon="./static/index/baoxiu.png" text="我要报修"/>
      <van-grid-item icon="./static/index/jf.png" text="便捷缴费"/>
      <van-grid-item icon="./static/index/mj.png" text="我的门禁"/>
      <van-grid-item icon="./static/index/dangjian.png" text="红色党建"/>
      <van-grid-item icon="./static/index/fk.png" text="我的访客"/>
      <van-grid-item icon="./static/index/gh.png" text="挂号就诊"/>
      <van-grid-item icon="./static/index/lyjd.png" text="旅行团建"/>
      <van-grid-item icon="./static/index/xx.png" text="学习辅导"/>
      <van-grid-item icon="./static/index/hz.png" text="我要合作"/>
      <van-grid-item icon="./static/index/qbyy.png" text="全部应用"/>
    </van-grid>
    <div >
      <van-notice-bar
        color="#1989fa"
        background="#ecf9ff"
        left-icon="volume-o"
        delay="1"
        speed="50"
      >
        欢迎光临牧之社区，社区事务一个app解决，社区便利超市更加方便！
      </van-notice-bar>
      <van-panel title="通知公告" status="查看更多"/>
    </div>
  </div>
</template>

<script>
  import {Grid, GridItem, Icon, Divider, Panel, NoticeBar} from 'vant';

  export default {
    components: {
      VanGrid: Grid,
      VanGridItem: GridItem,
      VanIcon: Icon,
      VanDivider: Divider,
      VanPanel: Panel,
      VanNoticeBar: NoticeBar
    },
    data() {
      return {
        wuye: '/s'
      }
    }
  }
</script>

<style scoped>

</style>
