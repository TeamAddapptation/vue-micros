<template>
  <li>
    <base-tile :height="tileHeight" :style="{ backgroundColor: background}">
      <header>
        <base-title>{{ title }}</base-title>
      </header>
      <base-desc>{{ description }}</base-desc>
      <base-button :link='link'>Learn More</base-button>
    </base-tile>
  </li>
</template>

<script>
export default {
  props: ['title', 'description', 'link', 'background', 'tileHeight'],
};
</script>

<style scoped>
li {
  flex: 1;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}
</style>