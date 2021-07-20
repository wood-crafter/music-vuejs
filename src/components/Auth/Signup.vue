<template>
  <div>
    <a @click.prevent="handleToSignin">Sign in</a>
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
    handleToSignin() {
      this.$emit('to-signin')
    }
  }
}
</script>
