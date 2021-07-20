<template>
  <div class="chart">
    <Menu class="menu"/>
    <div class="content">Chart</div>
  </div>
</template>

<script>
import Menu from '../components/Menu.vue'

export default {
  components: {
    Menu
  }
}
</script>

<style scoped>
.chart {
  display: flex;
  flex-direction: row;
}
.menu {
  flex-grow: 1;
}
.content {
  flex-grow: 15;
}
</style>
