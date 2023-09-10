<template>
  <label class="input-label">
    <input
      v-model="inputValue"
      ref="input"
      class="form-input-style"
      :placeholder="placeholder"
    />
    <span class="filter-cuption"> {{ cuption }}</span>
    <span v-if="isError" class="input-error"> {{ errorMessage }} </span>
  </label>
</template>

<script>
export default {
  name: "InputForm",
  props: {
    value: {
      type: String,
      default: ""
    },
    placeholder: String,
    cuption: String,
    errorMessage: {
      type: String,
      default: ""
    },
    isError: {
      type: Boolean,
      default: false
    }
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
