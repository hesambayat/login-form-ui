<template>
  <div class="form-element form-element--input">
    <label>
      <span class="label" v-if="!!label">{{ label }}</span>
      <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" :type="type" />
    </label>
  </div>
</template>

<script>
export default {
  name: 'el-input',
  props: ['modelValue', 'label', 'type'],
  emits: ['update:modelValue'],
}
</script>

<style>
  .form-element--input {
    margin-bottom: 20px;
  }

  .form-element--input .label { 
    display: block;
    font-size: 12px;
    line-height: 18px;
    margin-bottom: 6px;
  }

  .form-element--input input { 
    display: block;
    width: 100%;
    max-width: 100%;
    font-size: 14px;
    font-weight: var(--font-weight-regular);
    line-height: 20px;
    padding: 10px;
    margin: 0;
    border: 1px solid var(--color-light-gray);
    border-radius: 0;
    box-shadow: none;
    color: var(--color-dark-blue);
    background-color: var(--color-white);
    transition: border-color 0.1s;
    will-change: border-color;
  }

  .form-element--input input:focus {
    border-color: var(--color-silver);
  }
</style>