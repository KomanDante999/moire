<template>
  <li class="cart-item product">
    <div class="w-[120px] h-[120px]">
      <img :src="getGalleryImageUrl()" :alt="basketProductData.product.title" />
    </div>
    <div class="flex flex-col h-full col-start-2 col-span-4 sm:col-auto">
      <h3 class="mb-auto">{{ basketProductData.product.title }}</h3>
      <div class="flex items-center mb-4">
        <p class="mr-2 text-sm leading-none text-neutral-500">Цвет:</p>
        <i
          class="mr-2 block w-5 h-5 rounded-full"
          :style="{ backgroundColor: basketProductData.color.color.code }"
        ></i>
        <span class="text-sm leading-none text-primary">
          {{ basketProductData.color.color.title }}
        </span>
      </div>
      <span class="text-xs text-b9b9b9">
        Артикул: {{ basketProductData.id }}
      </span>
    </div>

    <FormCounterProduct
      v-model:count="currentProductCountValue"
      :amount="currentProductAmount"
      class="col-start-1 col-span-4 sm:col-auto title-base"
    />

    <button
      @click.prevent="doDeleteProductBasket"
      class="button-del"
      type="button"
      aria-label="Удалить товар из корзины"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-auto h-auto"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  </li>
</template>

<script>
import FormCounterProduct from "@/components/FormCounterProduct.vue";
import numberFormat from "@/helpers/numberFormat";
import { mapActions } from "vuex";

export default {
  name: "BasketItem",
  components: { FormCounterProduct },
  props: {
    basketProductData: Object
  },
  data() {
    return { currentProductCount: this.basketProductData.quantity };
  },
  computed: {
    currentProductCountValue: {
      get() {
        return this.currentProductCount;
      },
      set(value) {
        this.currentProductCount = value;
        this.doUpdateBasket();
      }
    },
    currentProductAmount() {
      return this.basketProductData.price * this.currentProductCountValue;
    }
  },
  methods: {
    ...mapActions(["updateBasket", "deleteProductBasket"]),
    doUpdateBasket() {
      const params = {
        productId: this.basketProductData.id,
        count: this.currentProductCountValue
      };
      this.updateBasket(params);
    },
    doDeleteProductBasket() {
      const params = {
        productId: this.basketProductData.id
      };
      this.deleteProductBasket(params);
    },
    getGalleryImageUrl() {
      if (
        this.basketProductData.color &&
        this.basketProductData.color.gallery &&
        this.basketProductData.color.gallery[0] &&
        this.basketProductData.color.gallery[0].file &&
        this.basketProductData.color.gallery[0].file.url
      ) {
        return this.basketProductData.color.gallery[0].file.url;
      } else {
        return "";
      }
    },
    numberFormat
  }
};
</script>
