<template>
  <form>
    <ul class="select-colors">
      <li
        v-for="item in categoriesData"
        :key="item.id"
        class="select-colors__item"
      >
        <label class="select-colors__label" tabindex="0">
          <input
            class="select-colors__input sr-only"
            type="checkbox"
            :value="item.id"
            v-model="selectedItemsValue"
          />
          <span
            class="select-colors__value opacity-40"
            :style="{ backgroundColor: item.code }"
          >
          </span>
        </label>
      </li>
    </ul>
  </form>
</template>

<script>
export default {
  name: "SelectColorsCheckbox",
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
