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

export default {
  name: "MainView",
  components: { ProductFilter, ProductList }
};
</script>
