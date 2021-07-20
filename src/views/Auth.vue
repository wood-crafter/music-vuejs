<template>
  <div class="auth">
    <router-link to="/">Home</router-link>
    <router-link to="/discovery">Discovery</router-link>
    <router-link to="/individual">Individual</router-link>
    <div v-if="isSignin">
      <Signin @to-signup="handleToSignup"/>
    </div>
    <div v-else>
      <Signup @to-signin="handleToSignin"/>
    </div>
  </div>
</template>

<script>
import Signin from '../components/Auth/Signin.vue'
import Signup from '../components/Auth/Signup.vue'

export default {
  components: {
    Signin,
    Signup
  },
  data () {
    return {
      username: '',
      password: '',
      err: '',
      isSignin: true
    }
  },
  methods: {
    handleToSignup(){
      this.isSignin = false
    },
    handleToSignin(){
      this.isSignin = true
    }
  }
}
</script>

