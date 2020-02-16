<template>
  <div>
    <Header/>
    <siderbar :siderbarData="siderbarData"/>
  </div>
</template>

<script>
  import Siderbar from '../category/siderbar/siderbar.vue'
  import Header from '../header/Header'

  export default {
    components: {
      Header,
      Siderbar,
    },
    data() {
      return {
        siderbarData:["新鲜水果","绿色蔬菜","粮油副食","调味品","根茎菜","蛋类","豆制品","肉类","菌类","海鲜"],
      }
    }
  }
</script>

<style scoped>

</style>
