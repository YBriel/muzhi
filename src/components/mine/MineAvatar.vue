<template>
  <div style="height: auto;">
    <van-image
      round
      width="4rem"
      height="4rem"
      fit="cover"
      src="https://img.yzcdn.cn/vant/cat.jpeg"
    />
  </div>

</template>

<script>
  import { Image } from 'vant';
  import { Divider } from 'vant';

  export default {

    components: {
      VanImage:Image,
      VanDivider:Divider
    }
  }
</script>

<style scoped>

</style>
