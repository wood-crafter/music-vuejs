<template>
  <div class="menu">
    <router-link to="/"><img src="/pics/menu-icon.jpg" alt="Home" class="home-image"></router-link>
    <router-link to="/discovery">Discovery</router-link>
    <router-link to="/individual">Individual</router-link>
    <router-link to="/chart">Chart</router-link>
    <router-link to="/artist">Artist</router-link>
    <router-link to="/live">Live</router-link>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style scoped>
.menu {
  background-image: linear-gradient(rgba(254, 150, 0, 0.93),rgba(255, 181, 73, 0.93));
  display: flex;
  flex-direction: column;
  border: 0;
  height: 100vh;
}
.menu > *{
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: rgb(78, 70, 70);
  cursor: pointer;
}
.menu > *:hover{
  color: rgb(238, 221, 221);
}
.home-image {
  height: 100%;
}
</style>
