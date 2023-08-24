<template>
  <teleport v-if="open" to="#teleport-target">
    <div class="modal__blackout"></div>
    <div class="modal__container">
      <div class="modal__contant">
        <button
          v-if="visibleBtnClose"
          class="modal__btn-x"
          type="button"
        ></button>
        <slot></slot>
        <button
          v-if="visibleBtnClose"
          class="modal__btn-close"
          type="button"
        ></button>
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  props: {
    open: {
      type: Boolean,
      require: true
    },
    visibleBtnClose: {
      type: Boolean,
      require: false,
      default: false
    }
  }
};
</script>
