<template>
  <div class="flex justify-center items-center flex-wrap">
    <div class="flex items-center w-[150px] h-[70px] mr-5">
      <button class="btn-round" type="button" aria-label="Убрать один товар">
        <svg width="12" height="12" fill="currentColor">
          <use xlink:href="#icon-minus"></use>
        </svg>
      </button>

      <input class="couter-input" value="1" name="count" />

      <button class="btn-round" type="button" aria-label="Добавить один товар">
        <svg width="12" height="12" fill="currentColor">
          <use xlink:href="#icon-plus"></use>
        </svg>
      </button>
    </div>

    <b class="price-counter"> 18 990 ₽ </b>
  </div>
</template>

<script>
export default {
  name: "CounterProduct",
  props: {
    countProduct: {
      type: Number,
      require: true,
      default: 1
    }
  }
};
</script>
