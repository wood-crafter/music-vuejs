<template>
  <div class="auth">
    <div class="content">
      <div v-if="isSignin">
        <Signin @to-signup="handleToSignup" @jwt-changed="handleJwtChanged" />
      </div>
      <div v-else>
        <Signup @to-signin="handleToSignin" @jwt-changed="handleJwtChanged" />
      </div>
    </div>
  </div>
</template>

<script>
import Signin from "../components/Auth/Signin.vue";
import Signup from "../components/Auth/Signup.vue";

export default {
  components: {
    Signin,
    Signup,
  },
  data() {
    return {
      username: "",
      password: "",
      err: "",
      isSignin: true,
    };
  },
  methods: {
    handleToSignup() {
      this.isSignin = false;
    },
    handleToSignin() {
      this.isSignin = true;
    },
    handleJwtChanged(jwt){
      localStorage.setItem("jwt", jwt);
      this.$router.push('/')
    }
  },
};
</script>

<style scoped>
.auth {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.15),rgba(0, 0, 0, 0.15)) ,url("/pics/login-back-ground.jpg");
  background-size: cover;
  background-position: center;
}
.content {
  height: 30rem;
  width: 25rem;
  background: rgba(0, 0, 0, 0.3);
  color: var(--text-color);
  box-shadow: -1px 4px 28px 0px rgba(0, 0, 0, 0.75);
}
</style>

