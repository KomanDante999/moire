<template>
  <ul class="select-colors">
    <li class="select-colors__item">
      <label class="select-colors__label" tabindex="0">
        <input
          class="select-colors__input sr-only"
          type="radio"
          name="color-1"
          value="#73B6EA"
          checked=""
        />
        <span class="select-colors__value" style="background-color: #73b6ea">
        </span>
      </label>
    </li>
    <li class="select-colors__item">
      <label class="select-colors__label" tabindex="0">
        <input
          class="select-colors__input sr-only"
          type="radio"
          name="color-1"
          value="#8BE000"
        />
        <span class="select-colors__value" style="background-color: #8be000">
        </span>
      </label>
    </li>
    <li class="select-colors__item">
      <label class="select-colors__label" tabindex="0">
        <input
          class="select-colors__input sr-only"
          type="radio"
          name="color-1"
          value="#222"
        />
        <span class="select-colors__value" style="background-color: #222">
        </span>
      </label>
    </li>
  </ul>
</template>

<script>
export default {
  name: "SelectColors",
  props: ["colorsData"]
};
</script>
