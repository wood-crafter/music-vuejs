<template>
  <div class="discovery">
    <Menu class="menu"/>
    <div class="content">Discovery</div>
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
.discovery {
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
