<template>
  <div class="artist">
    <Menu class="menu"/>
    <div class="content">Artist</div>
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
.artist {
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
