<template>
  <div class="home">
    <Menu class="menu"/>
    <div class="content">
      <Extensions />
      <TopTrending v-if="topTrending" :songs="topTrending" @song-clicked="handleSongClicked" />
      <NewSongs v-if="newSongs" :songs="newSongs" @song-clicked="handleSongClicked" />
      <HotArtist v-if="hotArtists" :artists="hotArtists" @artistClicked="handleArtistClicked" />
      <audio :src="songURL" v-if="songURL" autoplay controls></audio>
    </div>
  </div>
</template>

<script>
import Menu from '../components/Menu.vue'
import { getTopTrending, getTopNews, getTopArtist } from '../fetch.js'
import Extensions from '../components/Extensions.vue'
import TopTrending from '../components/TopTrending.vue'
import NewSongs from '../components/NewSongs.vue'
import HotArtist from '../components/HotArtist.vue'

export default {
  data () {
    return {
      topTrending: [],
      newSongs: [],
      hotArtists: [],
      songURL: "",
    }
  },
  components: {
    Menu,
    Extensions,
    TopTrending,
    NewSongs,
    HotArtist
  },
  async beforeCreate(){
    this.topTrending = await getTopTrending(5)
    this.newSongs = await getTopNews(5)
    this.hotArtists = await getTopArtist(5)
  },
  methods: {
    handleArtistClicked(id) {
      this.$router.push(`/artist/${id}`)
    },
    handleSongClicked(url) {
      this.songURL = url
    }
  }
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: row;
  max-width: 100vw;
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
  max-width: calc(100% - 10rem);
}
</style>
