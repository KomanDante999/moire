<template>
  <teleport v-if="open" to="#teleport-target">
    <!-- blackout -->
    <div
      class="z-[1010] fixed top-0 left-0 w-full h-full opacity-75 bg-black"
    ></div>
    <!-- container -->
    <div
      class="z-[1020] fixed top-0 left-0 w-full h-full flex justify-center items-center"
    >
      <!-- contant -->
      <div
        class="relative py-20 px-20 bg-gradient-to-br from-white from-30% to-orange-100"
      >
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
