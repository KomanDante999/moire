<template>
  <main>
    <div class="main-container">
      <div class="flex items-center">
        <h1 class="my-8 font-extrabold text-2xl leading-[54px] uppercase">
          Каталог
        </h1>
        <span class="ml-4 font-light leading-none text-secondary">
          152 товара
        </span>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-layout-main gap-x-5 gap-y-10">
        <ProductFilter />
        <ProductList />
      </div>
    </div>
  </main>
</template>

<script>
import ProductFilter from "@/components/ProductFilter.vue";
import ProductList from "@/components/ProductList.vue";

export default {
  name: "MainView",
  components: { ProductFilter, ProductList }
};
</script>
