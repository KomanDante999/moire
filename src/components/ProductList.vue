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
    <BasePaginator />
  </section>
  <AppModal :open="isProductsLoading" />
</template>

<script>
import { mapActions, mapState } from "vuex";
import ProductItem from "@/components/ProductItem.vue";
import BasePaginator from "@/components/BasePaginator.vue";
import AppModal from "@/components/AppModal.vue";

export default {
  name: "ProductList",
  components: { ProductItem, BasePaginator, AppModal },
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
