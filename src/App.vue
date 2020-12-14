<template>
  <the-header title="Micros" body="Body copy will go here"></the-header>
  <display-micros></display-micros>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue';
import DisplayMicros from './components/micros/DisplayMicros.vue';

export default {
  components: {
    TheHeader,
    DisplayMicros
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
}

body {
  margin: 0;
}
</style>