<template>
  <div>
    <a @click.prevent="handleToSignup">Sign up</a>
  </div>
</template>

<script>

export default {
  data () {
    return {
      username: '',
      password: '',
      err: ''
    }
  },
  methods: {
    handleToSignup () {
      this.$emit('to-signup')
    }
  }
}
</script>
