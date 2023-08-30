<template>
  <div class="flex items-center">
    <h1 class="title-main">Каталог</h1>
    <span v-if="paginationData" class="product-count">
      {{ paginationData.total }}
      {{ pluralRules(paginationData.total, ["товар", "товара", "товаров"]) }}
    </span>
  </div>
  <div class="grid grid-cols-1 sm:grid-cols-layout-main gap-x-5 gap-y-10">
    <ProductFilter />
    <ProductList />
  </div>
</template>

<script>
import ProductFilter from "@/components/ProductFilter.vue";
import ProductList from "@/components/ProductList.vue";
import pluralRules from "@/helpers/pluralRules";

import { mapState } from "vuex";

export default {
  name: "MainView",
  components: { ProductFilter, ProductList },
  computed: {
    ...mapState(["paginationData"])
  },
  methods: {
    pluralRules
  }
};
</script>
