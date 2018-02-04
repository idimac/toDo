<template>
  <div id="app">
    <myHeader></myHeader>
    <router-view/>
  </div>
</template>

<script>
import header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    'myHeader': header
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>
