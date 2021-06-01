<template>
  <transition name="fade">
    <div v-if="show" class="toast">
      <slot />
    </div>
  </transition>
</template>

<script>
export default {
  name: 'el-toast',
  props: ['show'],
}
</script>

<style>
  .toast { 
    position: fixed;
    bottom: 0;
    left: 50%;
    width: 100%;
    max-width: 100%;
    font-size: 14px;
    font-weight: var(--font-weight-regular);
    line-height: 24px;
    padding: 10px 20px;
    box-shadow: none;
    color: var(--color-white);
    background-color: var(--color-balmoral);
    transform: translateX(-50%);
    transition: opacity 0.1s, transform 0.1s;
    will-change: opacity, transform;
  }

  .toast.fade-enter-from,
  .toast.fade-leave-to {
    transform: translateX(-50%) translateY(50%);
    opacity: 0;
  }

  @media screen and (min-width: 768px) {
    .toast { 
      width: 500px;
      top: var(--spacing);
      bottom: auto;
      padding: 18px 20px;
      border-radius: 4px;
      box-shadow: var(--toast-shadow);
    }

    .toast.fade-enter-from,
    .toast.fade-leave-to {
      transform: translateX(-50%) translateY(-50%) scaleY(0.8);
      opacity: 0;
    }
  }
</style>