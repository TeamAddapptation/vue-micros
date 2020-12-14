<template>
  <ul>
    <inner-tile
      v-for="res in resources"
      :key="res.id"
      :title="res.title"
      :description="res.description"
      :link="res.link"
      :background="res.background"
      :tileHeight="res.tileHeight"
    ></inner-tile>
  </ul>
</template>

<script>
import InnerTile from './InnerTile.vue';

export default {
  inject: ['resources'],
  components: {
    InnerTile
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 15px;
  display: flex;
  padding: 0;
  margin: auto;
}
</style>