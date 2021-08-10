<template>
  <div class="discovery">
    <Menu class="menu"/>
    <div class="content">
      <Extensions />
      <RecommendSongs :songs="recommendSongs" @song-clicked="handleSongClicked" />
      <audio :src="songURL" v-if="songURL" autoplay controls></audio>
    </div>
  </div>
</template>

<script>
import { getTopTrending } from '../fetch.js'
import Menu from '../components/Menu.vue'
import Extensions from '../components/Extensions.vue'
import RecommendSongs from '../components/Discovery/RecommendSongs.vue'

export default {
  components: {
    Menu,
    Extensions,
    RecommendSongs
  },
  data () {
    return {
      recommendSongs: [],
      songURL: "",
    }
  },
  methods: {
    handleSongClicked(url) {
      this.songURL = url
    }
  },
  async beforeCreate(){
    this.recommendSongs = await getTopTrending(5)
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
  max-width: calc(100% - 10rem);
}
</style>
