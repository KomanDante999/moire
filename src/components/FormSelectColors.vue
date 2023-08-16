<template>
  <form>
    <ul v-if="currentColorId" class="select-colors">
      <li v-for="item in colorsData" :key="item.id" class="select-colors__item">
        <label class="select-colors__label" tabindex="0">
          <input
            class="select-colors__input sr-only"
            type="radio"
            :value="item.id"
            v-model="currentColorId"
          />
          <span
            class="select-colors__value opacity-40"
            :style="{ backgroundColor: item.color.code }"
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
  data() {
    return {
      currentColorId: this.colorsData[0].id
    };
  }
};
</script>
