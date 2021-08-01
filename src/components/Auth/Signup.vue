<template>
  <div>
    <form @submit.prevent="handleSignup">
      <div class="form-title">Vue Music</div>
      <div class="container">
        <input
          id="username"
          v-model="username"
          type="text"
          placeholder="Username"
          name="username"
          required
        />
        <input
          id="password"
          v-model="password"
          type="password"
          placeholder="Password"
          name="password"
          required
        />
        <input
          v-model="confirmPassword"
          type="password"
          placeholder="Confirm password"
          name="confirmPassword"
          required
        />
        <button type="submit">Sign up</button>
        <div v-if="err !== ''" style="color: red">{{err}}</div>
        <div class="auth-switch">
          Already have account?
          <a @click.prevent="handleToSignin">Sign in</a>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { signin, signup } from "../../fetch";
export default {
  data() {
    return {
      username: "",
      password: "",
      confirmPassword: "",
      err: "",
    };
  },
  methods: {
    async handleSignup() {
      if (this.password === this.confirmPassword && this.password !== '') {
        await signup(this.username, this.password);
        const res = await signin(this.username, this.password);
        const jwt = await res.text();
        this.$emit("jwt-changed", jwt);
      } else {
        this.err = "Confirm password not match";
        this.password = "";
        this.confirmPassword = "";
      }
    },
    handleToSignin() {
      this.$emit("to-signin");
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
