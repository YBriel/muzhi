<template>
  <div style="height: auto">
    <van-cell style="font-size: 16px;font-weight: bold; font-family: 'STKaiti',serif " title="我的订单" value="所有订单" is-link to="index"/>
  </div>
</template>

<script>
  import {Cell, CellGroup} from 'vant';
  import {Divider} from 'vant';

  export default {
    name: "MineAllOrder",
    components: {
      VanCell: Cell,
      VanCellGroup: CellGroup,
      VanDivider: Divider
    }
  }
</script>

<style scoped>

</style>
