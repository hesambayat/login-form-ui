<template>
  <div class="form-element form-element--input" :class="{ error: !!errorMessage }">
    <label>
      <span class="label" v-if="!!label">{{ label }}</span>
      <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" :type="type" />
      <transition name="slide-fade">
        <span class="error-message" v-if="!!errorMessage">{{ errorMessage }}</span>
      </transition>
    </label>
  </div>
</template>

<script>
export default {
  name: 'el-input',
  props: ['modelValue', 'label', 'type', 'errorMessage'],
  emits: ['update:modelValue'],
}
</script>

<style>
  .form-element--input {
    position: relative;
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

  .form-element--input.error input {
    border-color: var(--color-red);
  }

  .form-element--input .error-message {
    position: absolute;
    font-size: 10px;
    font-weight: var(--font-weight-bold);
    line-height: 20px;
    color: var(--color-red);
    transition: opacity 0.1s, transform 0.3s;
    will-change: opacity, transform;
  }

  .form-element--input .slide-fade-enter-from,
  .form-element--input .slide-fade-leave-to {
    transform: translateY(-5px);
    opacity: 0;
  }
</style>