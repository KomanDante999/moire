<template>
  <section v-if="products" class="flex flex-col self-stretch pb-20">
    <ul
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-10 lg:gap-y-16 mb-16"
    >
      <ProductItem
        v-for="item in products"
        :key="item.id"
        :productData="item"
      />
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
import { mapActions, mapState } from "vuex";
import ProductItem from "@/components/ProductItem.vue";

export default {
  name: "ProductList",
  components: { ProductItem },
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
