<template>
  <div
    class="song-avatar"
    :style="`background-image: url(${songAvatarURL})`"
    @click="handleSongClicked(song.id)"
  ></div>
</template>

<script>
import { getSongsAvatarURL } from "../fetch.js";
export default {
  props: ["song"],
  data() {
    return {
      songAvatarURL: "",
    };
  },
  methods: {
    handleSongClicked(id) {
      this.$emit("song-clicked", id);
    },
  },
  async created() {
    this.songAvatarURL = await getSongsAvatarURL(this.song.id);
  },
};
</script>
<style scoped>
.song-avatar {
  width: 25rem;
  height: 20rem;
  cursor: pointer;
  background-position: center;
  background-size: cover;
  border-radius: 10%;
}
</style>
