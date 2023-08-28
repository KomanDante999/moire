<template>
  <div class="flex justify-center items-center flex-wrap">
    <div class="flex items-center w-[150px] h-[70px] mr-5">
      <button class="btn-round" type="button" aria-label="Убрать один товар">
        <svg width="12" height="12" fill="currentColor">
          <use xlink:href="#icon-minus"></use>
        </svg>
      </button>

      <form @submit.prevent="">
        <input class="couter-input" v-model.number="countValue" />
      </form>

      <button class="btn-round" type="button" aria-label="Добавить один товар">
        <svg width="12" height="12" fill="currentColor">
          <use xlink:href="#icon-plus"></use>
        </svg>
      </button>
    </div>

    <b class="price-counter"> {{ amount }} ₽ </b>
  </div>
</template>

<script>
export default {
  name: "CounterProduct",
  props: {
    count: {
      type: Number,
      require: true,
      default: 1
    },
    amount: Number
  },
  emits: ["update:count"],
  computed: {
    countValue: {
      get() {
        return this.count;
      },
      set(newValue) {
        this.updateCount(newValue);
      }
    }
  },
  methods: {
    updateCount(value) {
      this.$emit("update:count", value);
    }
  }
};
</script>
