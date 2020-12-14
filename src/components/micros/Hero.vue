<template>
  <div>
    <inner-hero
      v-for="r in heroData"
      :key="r.id"
      :title="r.title"
      :description="r.description"
      :link="r.link"
      :background="r.background"
      :heroHeight="r.heroHeight"
    ></inner-hero>
  </div>
</template>

<script>
import InnerHero from './InnerHero.vue';

export default {
  inject: ['heroData'],
  components: {
    InnerHero
  }
}
</script>

<style scoped>
div {
  list-style: none;
  margin: 15px;
  display: flex;
  padding: 0;
  margin: auto;
}
</style>