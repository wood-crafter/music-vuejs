<template>
  <div class="home">
    <Menu class="menu"/>
    <div class="content">
      <Extensions />
      <TopTrending v-if="topTrending" :songs="topTrending" />
      <div></div>
    </div>
  </div>
</template>

<script>
import Menu from '../components/Menu.vue'
import { getTopFiveTrending } from '../fetch.js'
import Extensions from '../components/Extensions.vue'
import TopTrending from '../components/Home/TopTrending.vue'

export default {
  data () {
    return {
      topTrending: [],

    }
  },
  components: {
    Menu,
    Extensions,
    TopTrending,
  },
  async beforeCreate(){
    this.topTrending = await getTopFiveTrending()
  }
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: row;
}
.menu {
  width: 10rem;
}
.content {
  background-image: linear-gradient(rgba(255, 170, 23, 1), rgba(255, 181, 73, 0.93));
  flex-grow: 15;
}
</style>
