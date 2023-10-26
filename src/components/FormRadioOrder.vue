<template>
  <ul class="grid grid-cols-2 gap-x-7 mb-10">
    <li v-for="item in categoriesData" :key="item.id">
      <label class="order-options-label">
        <input
          class="order-options-radio sr-only"
          type="radio"
          :checked="item.checked"
          :value="item.id"
          v-model="selectedItemValue"
        />
        <span v-html="item.name" class="order-options-caption"></span>
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
  },
  methods: {
    insertTagBold(text) {
      return text.replace(/;/g, "<b>");
    }
  }
};
</script>
