<template>
  <form>
    <ul v-if="colorsData" class="select-colors">
      <li
        v-for="(item, index) in colorsData"
        :key="item.id"
        class="select-colors__item"
      >
        <label class="select-colors__label" tabindex="0">
          <input
            class="select-colors__input sr-only"
            type="radio"
            :value="index"
            v-model="selectedColorNumber"
          />
          <span
            class="select-colors__value opacity-40"
            :style="{ backgroundColor: colorsData[index].color.code }"
          >
          </span>
        </label>
      </li>
    </ul>
  </form>
</template>

<script>
export default {
  name: "SelectColors",
  props: ["colorsData"],
  model: {
    prop: "selectedColorNumber",
    event: "change"
  },
  data() {
    return {
      selectedColorNumber: 0
    };
  },
  watch: {
    selectedColorNumber(newVal) {
      this.$emit("change", newVal);
    }
  }
  // mounted() {
  //   this.selectedColorNumber = 0;
  // }
};
</script>
