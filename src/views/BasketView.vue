<template>
  <div class="mb-9">
    <BaseBreadcrumbs :breadcrumbs="breadcrumbsData" />

    <div class="flex items-center">
      <h1 class="title-main">Корзина</h1>
      <span class="product-count">
        {{ basketTotalItems }}
        {{ pluralRules(basketTotalItems, ["товар", "товара", "товаров"]) }}
      </span>
    </div>
  </div>

  <section>
    <form
      class="grid grid-cols-1 gap-y-14 lg:grid-cols-layout-cart lg:gap-x-10 lx:gap-x-12"
      method="POST"
    >
      <ul v-if="basketProductsData">
        <BasketItem
          v-for="item in basketProductsData"
          :key="item.id"
          :basketProductData="item"
        />
      </ul>

      <div
        class="w-full py-7 px-5 mob:w-[370px] lg:w-[340px] xl:w-[370px] h-[fit-content] lg:py-7 lg:px-5 xl:py-9 xl:px-8 border border-dedede"
      >
        <p class="mb-4">
          Мы&nbsp;посчитаем стоимость доставки на&nbsp;следующем этапе
        </p>
        <p class="mb-9 text-3xl leading-[48px]">
          Итого:
          <span class="font-medium text-[34px]">
            {{ numberFormat(basketTotalAmount) }} ₽</span
          >
        </p>

        <router-link custom :to="{ name: 'order' }" v-slot="{ navigate }">
          <button
            @click="navigate"
            :class="{ 'button-disabled': basketTotalItems == 0 }"
            class="w-full bg-alarm button-style button-primary"
            type="submit"
          >
            Оформить заказ
          </button>
        </router-link>
      </div>
    </form>
  </section>
</template>

<script>
import BaseBreadcrumbs from "@/components/BaseBreadcrumbs.vue";
import BasketItem from "@/components/BasketItem.vue";
import { mapGetters, mapState } from "vuex";
import numberFormat from "@/helpers/numberFormat";
import pluralRules from "@/helpers/pluralRules";
export default {
  name: "CartView",
  components: { BaseBreadcrumbs, BasketItem },
  computed: {
    ...mapState(["basketProductsData"]),
    ...mapGetters(["basketTotalAmount", "basketTotalItems"]),
    breadcrumbsData() {
      return [
        {
          titlePage: "Каталог",
          routerName: "home"
        },
        {
          titlePage: "Корзина",
          routerName: "",
          cursorNone: true
        }
      ];
    }
  },
  methods: {
    numberFormat,
    pluralRules
  }
};
</script>
