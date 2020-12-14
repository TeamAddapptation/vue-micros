<template>
  <div>
    <base-hero :height="heroHeight" :style="{ backgroundColor: background}">
      <header>
        <base-title>{{ title }}</base-title>
      </header>
      <base-desc>{{ description }}</base-desc>
      <base-button :link='link'>Learn More</base-button>
    </base-hero>
  </div>
</template>

<script>
export default {
  props: ['title', 'description', 'link', 'background', 'heroHeight'],
};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}
</style>