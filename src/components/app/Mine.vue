<template>
  <div>
    <MineAvatar/>
    <MineAllOrder/>
    <MineOrderStatus/>
    <MineItems/>
  </div>
</template>

<script>

  import MineAvatar from "../mine/MineAvatar";
  import MineAllOrder from "../mine/MineAllOrder";
  import MineOrderStatus from "../mine/MineOrderStatus";
  import MineItems from "../mine/MineItems";

  export default {
    name: "Mine",
    components: {
      MineAvatar: MineAvatar,
      MineAllOrder: MineAllOrder,
      MineOrderStatus:MineOrderStatus,
      MineItems:MineItems

    }
  }
</script>

<style scoped>

</style>
