<template>
  <div class="flex justify-start items-center flex-wrap">
    <div class="flex items-center w-[150px] h-[70px] mr-5">
      <button
        @click.prevent="updateCount(countValue - 1)"
        :class="{ 'button-disabled': count == minValue }"
        class="btn-round"
        type="button"
        aria-label="Убрать один товар"
      >
        <svg width="12" height="12" fill="currentColor">
          <use xlink:href="#icon-minus"></use>
        </svg>
      </button>

      <form @submit.prevent="updateCount()">
        <input v-model.number="countValue" ref="input" class="couter-input" />
      </form>

      <button
        @click.prevent="updateCount(countValue + 1)"
        class="btn-round"
        type="button"
        aria-label="Добавить один товар"
      >
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
      require: true
      // validator: function (value) {
      //   return !isNaN(parseFloat(value)) && isFinite(value);
      // }
    },
    amount: Number,
    minValue: {
      type: Number,
      require: false,
      default: 1
    }
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
      if (
        value === undefined ||
        (isNaN(value) && value.toString() !== eval(value).toString()) ||
        value <= this.minValue - 1
      ) {
        this.$refs.input.value = this.minValue;
        value = this.minValue;
      }
      this.$emit("update:count", value);
    }
  }
};
</script>
