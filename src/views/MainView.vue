<template>
  <div class="flex items-center">
    <h1 class="title-main">Каталог</h1>
    <span class="product-count"> 152 товара </span>
  </div>
  <div class="grid grid-cols-1 sm:grid-cols-layout-main gap-x-5 gap-y-10">
    <ProductFilter />
    <ProductList />
  </div>
</template>

<script>
import ProductFilter from "@/components/ProductFilter.vue";
import ProductList from "@/components/ProductList.vue";
import { mapActions } from "vuex";

export default {
  name: "MainView",
  components: { ProductFilter, ProductList },
  data() {
    return {
      productsLoading: false,
      productsLoadingFailed: false
    };
  },
  methods: {
    ...mapActions(["loadProducts"]),
    loadingProducts() {
      this.productsLoading = true;
      this.productsLoadingFailed = false;
      this.loadProducts()
        .then(() => (this.productsLoading = false))
        .catch(() => (this.productsLoadingFailed = true))
        .then(() => (this.productsLoading = false));
    }
  },
  created() {
    this.loadingProducts();
  }
};
</script>
