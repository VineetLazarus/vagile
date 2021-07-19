<template>
  <Login v-if="boo" msg="Welcome to Your Vue.js App"/>
  <Home />
</template>

<script>
import Login from './components/Login.vue'
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Login,
    Home
  },
  data() {
    return {
      boo: false
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
