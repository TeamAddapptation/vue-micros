<template>
  <header>
    <h2>{{ title }}</h2>
    <p>{{ body }}</p>
  </header>
</template>

<script>
export default {
  props: ['title', 'body']
}
</script>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  margin: 25px 15px;
  padding-bottom: 25px;
  border-bottom: 1px solid #51585d;
}

header h2 {
  color: #51585d;
  margin: 0;
}
header p {
  color: #51585d;
  margin: 0;
}
</style>