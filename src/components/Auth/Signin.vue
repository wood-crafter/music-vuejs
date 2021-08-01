<template>
  <div class="signin">
    <form @submit.prevent="handleSignin">
      <div class="form-title">Vue Music</div>
      <div class="container">
        <input
          v-model="username"
          type="text"
          placeholder="Username"
          name="username"
          required
        />
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          name="password"
          required
        />
        <button type="submit">Sign in</button>
        <div v-if="err !== ''" style="color: red">{{err}}</div>
        <div class="auth-switch">
          Don't have account?
          <a @click.prevent="handleToSignup">Sign up</a>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { signin } from '../../fetch'
export default {
  data() {
    return {
      username: "",
      password: "",
      err: "",
    };
  },
  methods: {
    async handleSignin() {
      const res = await signin(this.username, this.password)
      if(res.ok){
        const jwt = await res.text()
        this.$emit('jwt-changed', jwt)
      } else {
        this.err = "Wrong username or password"
      }
    },
    handleToSignup() {
      this.$emit("to-signup");
    },
  },
};
</script>

<style scoped>
.form-title {
  color: white;
  font-size: 2rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

input {
  border: 0;
  margin-bottom: 1rem;
  padding-left: 1rem;
  width: 19rem;
}

button {
  background-color: rgb(69, 137, 238);
  border: 0;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0;
  width: 20rem;
  color: white;
  cursor: pointer;
}
.auth-switch {
  color: white;
}
a {
  color: rgb(23, 113, 247);
  text-decoration: underline;
  cursor: pointer;
}
</style>
