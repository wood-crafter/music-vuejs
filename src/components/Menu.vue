<template>
  <div class="menu">
    <router-link to="/">Home</router-link>
    <router-link to="/auth">Auth</router-link>
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
  display: flex;
  flex-direction: column;
  border-right: 1px solid black;
  height: 100vh;
}
.menu > *{
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid black;
  text-decoration: none;
  color: black;
}
</style>
