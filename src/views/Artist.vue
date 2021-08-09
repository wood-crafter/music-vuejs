<template>
  <div class="artist">
    <Menu class="menu"/>
    <div class="content">
      <Extensions />
      <ArtistDetail v-if="id" :id="id"/>
    </div>
  </div>
</template>

<script>
import Menu from '../components/Menu.vue'
import Extensions from '../components/Extensions.vue'
import ArtistDetail from '../components/Artist/ArtistDetail.vue'

export default {
  components: {
    Menu,
    Extensions,
    ArtistDetail
  },
  data () {
    return {
      id: this.$route.params.id
    }
  },
}
</script>

<style scoped>
.artist {
  display: flex;
  flex-direction: row;
}
.menu {
  width: 10rem;
  position: sticky;
  left: 0;
  top: 0;
}
.content {
  background-image: linear-gradient(rgba(255, 170, 23, 1), rgba(255, 181, 73, 0.93));
  flex-grow: 15;
}
</style>
