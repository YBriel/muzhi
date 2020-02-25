<template>
  <van-search
    v-model="value"
    placeholder="请输入搜索关键词"
    show-action
    shape="round"
    label="南昌"
  >
    <div slot="action">搜索</div>
  </van-search>
</template>

<script>
  import { Search } from 'vant';

  export default {
    components: {
      VanSearch:Search
    },
    data() {
      return {
        value:''
      }
    }
  }
</script>

<style scoped>

</style>
