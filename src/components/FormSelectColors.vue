<template>
  <ul v-if="currentColorId" class="select-colors">
    <li v-for="item in colorsData" :key="item.id" class="select-colors__item">
      <label class="select-colors__label" tabindex="0">
        <input
          class="select-colors__input sr-only"
          type="radio"
          name="color-1"
          :value="item.id"
          v-model="currentColorId"
        />
        <span
          class="select-colors__value"
          :style="{ backgroundColor: item.color.code }"
        >
        </span>
      </label>
    </li>
  </ul>
</template>

<script>
export default {
  name: "SelectColors",
  props: ["colorsData"],
  data() {
    return {
      currentColorId: this.colorsData[0].id
    };
  }
};
</script>
