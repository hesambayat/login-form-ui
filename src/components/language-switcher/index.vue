<template>
  <div class="lng">
    <button class="lng__toggle">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 16C3.6 16 0 12.4 0 8C0 3.6 3.6 0 8 0C12.4 0 16 3.6 16 8C16 12.4 12.4 16 8 16ZM8 2C4.7 2 2 4.7 2 8C2 11.3 4.7 14 8 14C11.3 14 14 11.3 14 8C14 4.7 11.3 2 8 2Z"/>
        <path d="M4.20002 7.99999C4.50002 7.19999 5.80002 6.99999 6.40002 7.29999C7.00002 7.59999 7.50002 7.29999 8.10002 7.99999C8.60002 8.69999 9.10002 8.49999 9.20002 9.49999C9.30002 10.5 7.90002 12.3 7.60002 12.8C7.20002 13.3 6.20002 12.7 6.20002 11.3C6.20002 9.89999 5.50002 9.79999 5.10002 9.69999C4.60002 9.49999 3.60002 9.39999 4.20002 7.99999Z"/>
        <path d="M6.70002 3.49999C6.70002 3.49999 6.50002 3.99999 6.90002 4.09999C7.90002 4.29999 8.00002 4.59999 8.40002 5.09999C8.80002 5.59999 8.30002 6.09999 8.20002 6.69999C8.10002 7.19999 8.50002 7.49999 9.40002 7.29999C10.6 6.99999 10.7 8.29999 11.4 8.19999C12 8.09999 12.5 9.09999 12.8 9.19999C12.9 8.79999 13 8.39999 13 7.99999C13 6.09999 11.9 4.49999 10.4 3.59999C10 3.49999 9.60002 3.49999 9.20002 3.49999C8.40002 3.49999 7.70002 2.99999 6.70002 3.49999Z"/>
      </svg>
      Deutsch
    </button>
  </div>
</template>

<script>
export default {
  name: 'language-switcher',
}
</script>

<style>
  .lng {
    position: absolute;
    top: var(--spacing);
    right: var(--spacing);
  }

  .lng__toggle {
    position: relative;
    display: flex;
    align-items: center;
    font-size: 10px;
    line-height: 16px;
    padding: 7px 14px 7px 7px;
    border: none;
    border-radius: 15px;
    background: transparent;
    color: var(--color-dark-blue);
    overflow: hidden;
    z-index: 1;
  }

  .lng__toggle::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 15px;
    background-color: var(--color-silver);
    z-index: -1;
  }

  .lng.overlay .lng__toggle::before {
    opacity: 0.4;
  }

  .lng__toggle svg {
    fill: currentColor;
    margin-right: 6px;
  }
</style>
