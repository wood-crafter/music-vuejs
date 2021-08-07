<template>
  <div class="top-trending">
    <div class="title">Hot Artist</div>
    <div v-for="artist in artists" :key="artist.id" class="artist" @click="handleArtistClicked(artist.id)">
      {{ artist.name }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["artists"],
  methods: {
    handleArtistClicked(id) {
      this.$emit('artistClicked', id)
    }
  }
};
</script>

<style scoped>
.artist {
  padding-left: 2rem;
  text-align: start;
  cursor: pointer;
}
.artist:hover {
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
