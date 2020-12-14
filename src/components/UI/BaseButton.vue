<template>
  <a :href="link" class="default-btn">
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: ['mode', 'link']
}
</script>

<style scoped>
.default-btn {
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: #89e1f8;
  text-decoration: none;
  color: #101010;
  cursor: pointer;
  margin-top:50px;
}

.default-btn:hover,
.default-btn:active {
  background-color: #59d5f6;
}

</style>