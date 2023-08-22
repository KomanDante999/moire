<template>
  <select v-model="selectedItemValue" class="form-input-style">
    <option v-for="item in categoriesData" :key="item.id" :value="item.id">
      {{ item.title }}
    </option>
  </select>
</template>

<script>
export default {
  name: "FormSelect",
  props: {
    categoriesData: Array,
    selectedItem: {
      type: Number,
      require: true,
      default: 0
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
