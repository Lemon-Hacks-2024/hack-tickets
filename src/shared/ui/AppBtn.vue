<template>
  <button type="submit" class="btn" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped lang="scss">
.btn {
  background-color: var(--main-color);
  padding: 12px 30px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  height: 48px;
  font-weight: 600;
  transition: box-shadow 0.3s;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 15px;

  :deep(img),
  :deep(svg) {
    min-width: 23px;
    max-width: 23px;
  }

  &:hover {
    box-shadow: 0px 0px 0px 9999px rgba(0, 0, 0, 0.2) inset;
  }

  &.full-w {
    width: 100%;
  }
  &.cancel {
    background-color: #d0d0d0;
  }
  &.dangerBgDark {
    background-color: var(--bg-danger-dark);
  }
  &.shadow {
    box-shadow: var(--shadow-btn);
  }
  &.text {
    background-color: transparent;
  }
  &.white {
    color: #fff;
  }
}
</style>
