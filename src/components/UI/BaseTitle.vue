<template>
  <h2 :class="mode">
    <slot></slot>
  </h2>
</template>

<script>
export default {
  props: ['mode']
}
</script>

<style scoped>
h2 {
    color: white;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 3rem;
    margin: 0;
}
</style>