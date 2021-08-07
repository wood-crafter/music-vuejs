<template>
  <div class="home">
    <Menu class="menu"/>
    <div class="content">
      <Extensions />
      <TopTrending v-if="topTrending" :songs="topTrending" />
      <NewSongs v-if="topTrending" :songs="newSongs" />
      <div></div>
    </div>
  </div>
</template>

<script>
import Menu from '../components/Menu.vue'
import { getTopFiveTrending, getTopFiveNews } from '../fetch.js'
import Extensions from '../components/Extensions.vue'
import TopTrending from '../components/TopTrending.vue'
import NewSongs from '../components/NewSongs.vue'

export default {
  data () {
    return {
      topTrending: [],
      newSongs: []
    }
  },
  components: {
    Menu,
    Extensions,
    TopTrending,
    NewSongs
  },
  async beforeCreate(){
    this.topTrending = await getTopFiveTrending()
    this.newSongs = await getTopFiveNews()
  }
}
</script>

<style scoped>
.home {
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
