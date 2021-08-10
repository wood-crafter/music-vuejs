<template>
  <div class="artist-detail">
    <div class="title">
      <div class="artist-avatar" :style="`background-image: url(${artistAvatarURL});`"></div>
      <div class="artist-name">{{ artist.name }}</div>
    </div>
    <div class="artist-about"></div>
  </div>
</template>

<script>
import { getArtistById, getArtistAvatarURL } from '../../fetch.js'
export default {
  props: ["id"],
  data () {
    return {
      artist: "",
      artistAvatarURL: ""
    }
  },
  async created () {
    this.artist = await getArtistById(this.id) 
    this.artistAvatarURL = getArtistAvatarURL(this.id)
  },
  methods: {
  }
};
</script>

<style scoped>
.artist-detail {
  display: flex;
  flex-direction: row;
}
.title {
  margin-left: 5rem;
  width: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.artist-avatar {
  width: 10rem;
  height: 10rem;
  cursor: pointer;
  border-radius: 50%;
  background-position: center;
  background-size: cover;
}
.artist-about {
  margin-left: 2rem;
}
.artist-name {
  color: rgb(1, 27, 173);
  font-size: 1.5rem;
}
</style>
