<template>
  <div class="individual">
    <Menu class="menu"/>
    <div class="content">Individual</div>
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
.individual {
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
