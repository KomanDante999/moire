<template>
  <ul class="grid grid-cols-2 gap-x-7 mb-10">
    <li>
      <label class="order-options-label">
        <input
          class="order-options-radio sr-only"
          type="radio"
          checked="true"
        />
        <span class="order-options-caption"> Самовывоз <b>бесплатно</b> </span>
      </label>
    </li>
  </ul>
</template>

<script>
export default {
  name: "FormRadioOrder",
  props: {
    categoriesData: Array,
    selectedItem: {
      type: String,
      require: true
    }
  },
  emits: ["update:selectedItem"],
  computed: {
    selectedItemValue: {
      get() {
        return this.selectedItem;
      },
      set(newValue) {
        this.$emit("update:selectedItem", newValue);
      }
    }
  }
};
</script>
