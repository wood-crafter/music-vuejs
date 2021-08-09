<template>
  <div class="artist-detail">
    <img :src="artistAvatarURL" alt="" class="artist-avatar">
    <div>{{artist.name}}</div>
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
  flex-direction: column;
}
.artist-avatar {
  width: 10rem;
  cursor: pointer;
  margin-left: 5rem;
}
</style>
