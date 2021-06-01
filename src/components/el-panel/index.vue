<template>
  <div class="panel">
    <div class="panel__modal">
      <div class="panel__modal__inner">
        <div class="panel__modal__inner__thumb">
          <slot name="thumb">
            <img class="placeholder" :src="require('@/assets/placeholder.jpg')" />
          </slot>
          <slot name="lng-switcher">
            <language-switcher class="lg-none overlay" />
          </slot>
        </div>
        <div class="panel__modal__inner__content">
          <div class="panel__modal__inner__content__main">
            <slot />
          </div>
          <div
            v-if="!!$slots.footer"
            class="panel__modal__inner__content__footer"
          >
            <slot name="footer" />
          </div>
        </div>
      </div>
      <div class="panel__modal__footer">
        <slot name="branding">
          <el-logo />
        </slot>
      </div>
      <slot name="lng-switcher">
        <language-switcher class="sm-none" />
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'el-panel',
  mounted() {
    document.documentElement.classList.add('has-panel')
  },
  unmounted() {
    document.documentElement.classList.remove('has-panel')
  },
}
</script>

<style>
.panel {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  overflow: auto;
}

.panel__modal {
  padding: var(--spacing);
  max-width: 100%;
}

.panel__modal__inner {
  width: 860px;
  max-width: 100%;
  background-color: var(--color-white);
  box-shadow: var(--box-shadow);
}

.panel__modal__inner__thumb {
  position: relative;
  padding-top: 41.2%;
  overflow: hidden;
  background-color: var(--color-dark-blue);
}

.panel__modal__inner__thumb .placeholder {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 228%;
  height: auto;
  left: 50%;
  top: 50%;
  transform: translate3d(-66%, -38%, 0);
  object-fit: cover;
}

.panel__modal__inner__content {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: var(--spacing);
}

.panel__modal__inner__content h1 {
  font-size: 26px;
  line-height: 35px;
  font-weight: var(--font-weight-regular);
  margin: calc(0.5 * var(--spacing)) 0 var(--spacing);
}

.panel__modal__inner__content h1 small {
  display: block;
  font-size: 18px;
  line-height: 25px;
}

.panel__modal__inner__content h3 {
  font-size: 14px;
  line-height: 24px;
  font-weight: var(--font-weight-regular);
  margin: calc(-0.5 * var(--spacing)) 0 var(--spacing);
}

.panel__modal__inner__content__footer {
  margin-top: 54px;
  font-size: 12px;
  font-weight: var(--font-weight-bold);
  line-height: 24px;
  color: var(--color-metal);
}

.panel__modal__inner__content__footer a {
  color: inherit;
}

.panel__modal__footer {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

@media screen and (min-height: 560px) and (min-width: 768px) {
  .panel__modal__footer {
    margin-bottom: -59px;
  }
}

@media screen and (max-width: 767px) {
  .panel .sm-none {
    display: none;
  }
}

@media screen and (min-width: 768px) {
  .panel__modal__inner {
    display: grid;
    grid-template-columns: 51.628% 38%;
    grid-template-areas: "content thumb";
    grid-gap: 10.372%;
  }

  .panel__modal__inner__thumb {
    grid-area: thumb;
    padding-top: 0;
    height: 100%;
    min-height: 560px;
  }

  .panel__modal__inner__thumb .placeholder {
    width: 1543px;
    height: 1031px;
    left: 50%;
    top: 50%;
    transform: translate3d(calc(-50% - 95px), calc(-50% + 50px), 0);
  }

  .panel__modal__inner__content {
    grid-area: content;
    padding: var(--spacing) calc(2 * var(--spacing));
  }

  .panel__modal__inner__content__footer {
    margin-top: 75px;
  }

  .panel__modal__footer {
    margin-top: 38px;
  }

  .panel .lg-none {
    display: none;
  }
}

html.has-panel {
  height: 100%;
  background-color: var(--color-gray);
}

html.has-panel body {
  height: 100%;
}

html.has-panel #app {
  height: 100%;
}
</style>
