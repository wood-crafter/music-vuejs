<template>
  <div class="recommend-songs">
    <div class="title">Recommend for you</div>
    <div class="content">
      <div v-for="song in songs" :key="song.id" class="song">
        <SongPoster :song="song" @song-clicked="handleSongClicked" />
      </div>
    </div>
  </div>
</template>

<script>
import { getSongById } from "../../fetch.js";
import SongPoster from "../SongPoster.vue";
export default {
  props: ["songs"],
  components: {
    SongPoster,
  },
  data() {
    return {
      songURL: "",
    };
  },
  methods: {
    handleSongClicked(id) {
      this.songURL = getSongById(id);
      this.$emit("song-clicked", this.songURL);
    },
  },
};
</script>

<style scoped>
.recommend-songs {
  max-width: 100%;
}
.content {
  display: flex;
  overflow-x: auto;
}
.song {
  margin: 0.3rem;
  width: 25rem;
  height: 20rem;
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
