<template>
  <div class="live">
    <Menu class="menu"/>
    <div class="content">Live</div>
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
.live {
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
