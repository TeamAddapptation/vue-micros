<template>
  <div :style="heroCss">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    height: {
      type: Number,
      default: 600
    }
  },
  computed: {
    heroCss() {
      return {
        '--height': this.height + 'px',
      }
    }
  }
};
</script>

<style scoped>
div {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 3rem;
  margin: 1rem;
  display: flex;
  height: var(--height);
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
}
</style>