<template>
  <div class="song">
    <div class="top-num"> {{ topNum}} </div>
    <div @click="handleSongClicked(song.id)" class="song-name">
      <div class="song-avatar" :style="`background-image: url(${songAvatarURL})`">
      </div>
      {{ song.name }}
    </div>
  </div>
</template>

<script>
import { getSongsAvatarURL } from '../fetch.js'
export default {
  props: ["song", "topNum"],
  data () {
    return {
      songAvatarURL: "",
    }
  },
  methods: {
    handleSongClicked(id) {
      this.$emit('song-clicked', id)
    }
  },
  async created() {
    this.songAvatarURL = await getSongsAvatarURL(this.song.id)
  }
};
</script>
<style scoped>
.song {
  display: flex;
  padding-left: 1rem;
  background-color: rgb(255, 184, 62);
  align-items: center;
}
.top-num {
  display: flex;
  cursor: default;
  padding-right: 1.5rem;
}
.song-name {
  cursor: pointer;
  display: flex;
  align-items: center;
}

.song-name:hover {
  color: rgb(238, 221, 221);
}

.song-avatar {
  margin: 0.3rem;
  margin-right: 1rem;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  background-position: center;
  background-size: cover;
  border-radius: 10%;
}
</style>
