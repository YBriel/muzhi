<template>
  <div>
    <van-sidebar v-model="activeKey" @change="siderChange">
      <van-sidebar-item v-for='item in siderbarData' :key="item" :title=item />
    </van-sidebar>
  </div>
</template>

<script>
  import {Sidebar, SidebarItem} from 'vant';

  export default {
    components: {
      VanSidebar: Sidebar,
      VanSidebarItem: SidebarItem,
    },
    props:{
      siderbarData:Array
    },
    data() {
      return {
        activeKey: 0,
      }
    },
    methods:{
      siderChange(index) {
        this.$emit('siderChange', index);
        //Notify({ type: 'primary', message: this.siderbarData[index] });
        //console.log("切换了"+index);
      },
    }
  }

</script>

<style scoped>

</style>
