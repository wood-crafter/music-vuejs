<template>
  <div class="discovery">
    <Menu class="menu"/>
    <div class="content">
      <Extensions />
      <div></div>
    </div>
  </div>
</template>

<script>
import Menu from '../components/Menu.vue'
import Extensions from '../components/Extensions.vue'

export default {
  components: {
    Menu,
    Extensions
  }
}
</script>

<style scoped>
.discovery {
  display: flex;
  flex-direction: row;
}
.menu {
  width: 10rem;
}
.content {
  background-image: linear-gradient(rgba(255, 170, 23, 1), rgba(255, 181, 73, 0.93));
  flex-grow: 15;
}
</style>
