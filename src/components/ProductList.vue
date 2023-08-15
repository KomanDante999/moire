<template>
  <section v-if="products" class="flex flex-col self-stretch pb-20">
    <ul
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-10 lg:gap-y-16 mb-16"
    >
      <li
        v-for="item in products"
        :key="item.id"
        class="flex flex-col items-start"
      >
        <router-link
          :to="{ name: 'product', params: { id: item.id } }"
          class="block w-full"
          href="#"
        >
          <img
            :src="item.colors[0].gallery[0].file.url"
            :alt="item.title"
            class="block h-[350px] mb-5 bg-superlite"
          />
          <h3 class="max-w-[270px] mb-2">
            {{ item.title }}
          </h3>
        </router-link>
        <span class="catalog__price"> {{ item.price }} ₽ </span>
        <FormSelectColors :colorsData="item.colors" />
      </li>
    </ul>
    <!-- pagination -->
    <ul class="flex items-center justify-center flex-wrap mb-auto">
      <li class="pagination__item mr-6">
        <a
          class="pagination__link pagination__link-arrow pagination__link--disabled"
          aria-label="Предыдущая страница"
        >
          <svg class="mr-[2px]" width="8" height="14" fill="currentColor">
            <use xlink:href="#icon-arrow-left"></use>
          </svg>
        </a>
      </li>
      <li>
        <a
          class="pagination__link pagination__link--events pagination__link--current"
        >
          1
        </a>
      </li>
      <li>
        <a class="pagination__link pagination__link--events" href="#"> 2 </a>
      </li>
      <li>
        <a class="pagination__link pagination__link--events" href="#"> 3 </a>
      </li>
      <li>
        <a class="pagination__link pagination__link--events" href="#"> 4 </a>
      </li>
      <li>
        <a class="pagination__link pagination__link--events" href="#"> ... </a>
      </li>
      <li>
        <a class="pagination__link pagination__link--events" href="#"> 10 </a>
      </li>
      <li class="pagination__item ml-6">
        <a
          class="pagination__link pagination__link--events pagination__link-arrow pagination__link-arrow--events"
          href="#"
          aria-label="Следующая страница"
        >
          <svg class="ml-[2px]" width="8" height="14" fill="currentColor">
            <use xlink:href="#icon-arrow-right"></use>
          </svg>
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
import FormSelectColors from "@/components/FormSelectColors.vue";
import { mapActions, mapState } from "vuex";

export default {
  name: "ProductList",
  components: { FormSelectColors },
  data() {
    return {
      isProductsLoading: false,
      isProductsLoadingFailed: false
    };
  },
  computed: {
    ...mapState(["products"])
  },
  methods: {
    ...mapActions(["loadProducts"]),
    doLoadingProducts() {
      this.isProductsLoading = true;
      this.isProductsLoadingFailed = false;
      this.loadProducts()
        .then(() => (this.isProductsLoading = false))
        .catch(() => (this.isProductsLoadingFailed = true))
        .then(() => (this.isProductsLoading = false));
    }
  },
  created() {
    this.doLoadingProducts();
  }
};
</script>
