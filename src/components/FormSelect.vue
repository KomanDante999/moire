<template>
  <select v-model="selectedItemValue" class="form-input-style">
    <option v-for="(item, index) in categoriesData" :key="index" :value="index">
      {{ item.title }}
    </option>
  </select>
</template>

<script>
export default {
  name: "FormSelect",
  props: {
    categoriesData: {
      type: Array,
      require: true
    },
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
