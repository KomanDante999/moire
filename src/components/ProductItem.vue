<template>
  <li class="flex flex-col items-start">
    <router-link
      :to="{ name: 'product', params: { id: productData.id } }"
      class="block w-full"
    >
      <img
        :src="productData.colors[currentColorNumber].gallery[0].file.url"
        :alt="productData.title"
        class="block h-[350px] mb-5 bg-superlite"
      />
      <h3 class="max-w-[270px] mb-2">
        {{ productData.title }}
      </h3>
    </router-link>
    <span class="catalog__price"> {{ productData.price }} ₽ </span>
    <FormSelectColors
      :colorsData="productData.colors"
      v-model="currentColorNumber"
    />
  </li>
</template>

<script>
import FormSelectColors from "@/components/FormSelectColors.vue";

export default {
  name: "ProductItem",
  props: ["productData"],
  components: { FormSelectColors },
  data() {
    return {
      currentColorNumber: 0
    };
  }
};
</script>
