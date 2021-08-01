<template>
  <div class="extensions">
    <div class="search">
      <input type="text" />
      <div class="button-search">
        <ion-icon name="search-outline"></ion-icon>
      </div>
    </div>
    <div class="options">
      <div class="option"><ion-icon name="contrast-outline"></ion-icon></div>
      <div class="option"><ion-icon name="settings-outline"></ion-icon></div>
      <router-link class="option" to="/auth"
        ><ion-icon name="person-circle-outline"></ion-icon
      ></router-link>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style scoped>
.extensions {
  display: flex;
  height: 4rem;
  margin: 0;
  justify-content: space-between;
}
.search {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
}
.search input {
  height: 1.7rem;
  padding: 0;
  border: 0.5px solid rgb(202, 202, 202);
  border-right: 0;
  width: 80%;
  border-top-left-radius: 0.13rem;
}
.options {
  margin-right: 3rem;
  display: flex;
}
.option {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2rem;
  text-decoration: none;
  cursor: pointer;
}
.button-search {
  height: 1.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 0.13rem;
  background-color: rgb(202, 202, 202);
  border-left: 0;
  border: 0.5px solid rgb(202, 202, 202);
  width: 3rem;
  cursor: pointer;
}
</style>
