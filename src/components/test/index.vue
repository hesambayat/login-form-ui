<template>
  <h1>
    <slot>I'm a global component!</slot>
  </h1>
</template>

<script>
export default {
  name: 'test-component',
}
</script>

<style scoped>
  h1 {
    color: deeppink;
  }
</style>
