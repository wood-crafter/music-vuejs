<template>
  <div class="top-trending">
    <div class="title">Top Trending</div>
    <div v-for="song in songs" :key="song.id" class="song" @click="handleSongClicked(song.id)">
      {{ song.name }}
    </div>
    <audio :src="songURL" v-if="songURL" autoplay controls></audio>
  </div>
</template>

<script>
import { getSongById } from '../../fetch.js'
export default {
  props: ["songs"],
  data () {
    return {
      songURL: "",
    }
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
  text-align: start;
  cursor: pointer;
}
.song:hover {
  color: rgb(238, 221, 221);
}
.title {
  font-size: 2rem;
  color: rgb(231, 120, 207);
  padding-left: 2rem;
  text-align: start;
  cursor: pointer;
}
</style>
