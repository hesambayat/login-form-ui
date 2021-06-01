<template>
  <div class="grid"><slot /></div>
</template>

<script>
export default {
  name: 'el-grid',
  props: {}
}
</script>

<style>
.grid {
  display: flex;
  flex-wrap: wrap;
}

.align-items-center {
  align-items: center;
}

.justify-content-space-between {
  justify-content: space-between;
}
</style>