<template>
  <ul>
    <li v-for="item in categoriesData" :key="item.id" class="check-list__item">
      <label class="check-list__label">
        <input
          class="check-list__check sr-only"
          type="checkbox"
          :value="item.id"
          v-model="selectedItemsValue"
        />
        <span class="check-list__desc">
          {{ item.title }}
          <span> ({{ item.productsCount }}) </span>
        </span>
      </label>
    </li>
  </ul>
</template>

<script>
export default {
  name: "FormCheckbox",
  props: {
    categoriesData: Array,
    selectedItems: {
      type: Array,
      require: true
    }
  },
  emits: ["update:selectedItems"],
  computed: {
    selectedItemsValue: {
      get() {
        return this.selectedItems;
      },
      set(newValue) {
        this.$emit("update:selectedItems", newValue);
      }
    }
  }
};
</script>
