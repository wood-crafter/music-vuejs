<template>
  <div class="top-trending">
    <div class="title">Top Trending</div>
    <div v-for="(song, index) in songs" :key="song.id" class="song">
      <Song :song="song" :topNum="index + 1" @song-clicked="handleSongClicked"/>
    </div>
    <audio :src="songURL" v-if="songURL" autoplay controls></audio>
  </div>
</template>

<script>
import { getSongById } from '../fetch.js'
import Song from './Song.vue'
export default {
  props: ["songs"],
  data () {
    return {
      songURL: "",
    }
  },
  components: {
    Song
  },
  methods: {
    handleSongClicked(id) {
      this.songURL = getSongById(id)
    }
  }
};
</script>

<style scoped>
.song {
  padding-left: 2rem;
  padding-right: 2rem;
  text-align: start;
  margin-bottom: 0.5rem;
}
.title {
  font-size: 2rem;
  color: rgb(231, 120, 207);
  padding-left: 2rem;
  text-align: start;
  cursor: pointer;
}
</style>
