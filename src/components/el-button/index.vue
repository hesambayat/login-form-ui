<template>
  <button class="btn"><slot /></button>
</template>

<script>
export default {
  name: 'el-button',
  props: {}
}
</script>

<style>
.btn {
  display: inline-flex;
  border: none;
  border-radius: 0;
  font-size: 12px;
  font-weight: var(--font-weight-bold);
  line-height: 24px;
  padding: 9px 24px;
  color: var(--color-white);
  background-color: var(--color-red);
  -webkit-appearance: none;
  transition: opacity 0.1s;
  will-change: opacity;
  cursor: pointer;
}

.btn:hover,
.btn:focus {
  opacity: 0.8;
}
</style>