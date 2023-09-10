<template>
  <label class="input-label">
    <textarea
      v-model="inputValue"
      ref="input"
      class="form-input-style form-texarea-style"
      rows="5"
      :placeholder="placeholder"
    ></textarea>
    <span class="filter-cuption"> {{ cuption }} </span>
  </label>
</template>

<script>
export default {
  name: "FormTexarea",
  props: {
    value: {
      type: String,
      default: ""
    },
    placeholder: String,
    cuption: String
  },
  emits: ["update:value"],
  computed: {
    inputValue: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.updateInputValue(newValue);
      }
    }
  },
  methods: {
    updateInputValue(newValue) {
      this.$emit("update:value", newValue);
    }
  }
};
</script>
