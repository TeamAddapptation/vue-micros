<template>
    <div id="app">
        <Hero />
    </div>
</template>

<script>
import Hero from './components/Hero.vue'
export default {

    name: 'App',
    components: {
        Hero
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  
}
</style>
