<template>
  <div class="form-element form-element--checkbox">
    <label>
      <input type="checkbox" :checked="modelValue === 'yes'" :value="modelValue" @change="$emit('update:modelValue', $event.target.checked ? 'yes' : 'no')" />
      <span class="checkbox">
        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.51185 1.66669L3.33334 7.8452L0.488159 5.00002L1.66667 3.82151L3.33334 5.48817L8.33334 0.488174L9.51185 1.66669Z"/>
        </svg>
      </span>
      <span class="label" v-if="!!label">{{ label }}</span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'el-checkbox',
  props: ['modelValue', 'label'],
  emits: ['update:modelValue'],
}
</script>

<style>
.form-element--checkbox label {
  display: block;
  position: relative;
  padding-left: 30px;
}

.form-element--checkbox input {
  position: absolute;
  left: 0;
  top: 0;
  width: 20px;
  height: 20px;
  opacity: 0;
}

.form-element--checkbox .checkbox {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  width: 20px;
  height: 20px;
  border: 1px solid var(--color-light-gray);
  transition: border-color 0.1s, background-color 0.1s, opacity 0.1s;
  will-change: border-color, background-color, opacity;
}

.form-element--checkbox input:checked + .checkbox {
  border-color: var(--color-red);
  background-color: var(--color-red);
}

.form-element--checkbox input:not(:checked):focus + .checkbox {
  border-color: var(--color-silver);
}

.form-element--checkbox .checkbox svg {
  fill: var(--color-white);
  transition: opacity 0.1s, transform 0.2s;
  will-change: opacity, transform;
}

.form-element--checkbox input:not(:checked) + .checkbox svg {
  opacity: 0;
  transform: scale(0);
}

.form-element--checkbox .label {
  display: block;
  font-size: 10px;
  font-weight: var(--font-weight-bold);
  line-height: 20px;
  color: var(--color-metal);
  user-select: none;
}
</style>