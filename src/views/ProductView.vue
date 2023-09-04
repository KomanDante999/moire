<template>
  <div v-if="productData" class="mb-9">
    <!-- breadcrumbs -->
    <BaseBreadcrumbs :breadcrumbs="breadcrumbsData" />
  </div>

  <section v-if="productData" class="grid gap-7 items-start">
    <div>
      <div class="mb-5">
        <img
          class="w-[570px] h-[570px]"
          :src="getGalleryImageUrl()"
          :alt="productData.title"
        />
      </div>
      <ul class="grid grid-cols-5 gap-5">
        <li>
          <a href="#" class="pics__link pics__link--current">
            <img
              class="w-[98px] h-[98px]"
              :src="getGalleryImageUrl()"
              :alt="productData.title"
            />
          </a>
        </li>
        <li>
          <a href="#" class="pics__link">
            <img
              class="w-[98px] h-[98px]"
              :src="getGalleryImageUrl()"
              :alt="productData.title"
            />
          </a>
        </li>
      </ul>
    </div>

    <div>
      <span class="text-sm leading-none text-secondary"
        >Артикул: {{ productData.id }}</span
      >
      <h2 class="title-h2 mt-3 mb-5">{{ productData.title }}</h2>
      <div>
        <form @submit.prevent="doAddProductToBasket" class="">
          <!-- counter -->
          <FormCounterProduct
            v-model:count="currentProductCountValue"
            :amount="currentProductAmount"
            class="mb-3"
          />

          <div class="flex justify-start items-start mb-9">
            <fieldset class="form__block mr-5">
              <legend class="form-legend">Цвет</legend>
              <FormSelectColors
                :colorsData="productData.colors"
                v-model:currentColorNumber="currentProductColorValue"
              />
            </fieldset>

            <fieldset class="form__block">
              <legend class="form-legend">Размер</legend>
              <label class="block w-24">
                <FormSelect
                  :categoriesData="productData.sizes"
                  v-model:selectedItem="currentProductSizeValue"
                  class="form-input-style h-9 py-[6px] pr-6 pl-3"
                />
              </label>
            </fieldset>
          </div>

          <button
            class="min-w-[200px] button-style button-primary bg-alarm"
            type="submit"
          >
            В корзину
          </button>
        </form>
      </div>
    </div>

    <BaseTabs :infoData="currentProductInfoData" />
  </section>
  <LayoutModal :open="isProductLoading">
    <LayoutPreloader />
  </LayoutModal>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
import { TEMPLATE_PRODUCT_INFO } from "@/configApp";
import BaseBreadcrumbs from "@/components/BaseBreadcrumbs.vue";
import BaseTabs from "@/components/BaseTabs.vue";
import FormCounterProduct from "@/components/FormCounterProduct.vue";
import FormSelect from "@/components/FormSelect.vue";
import FormSelectColors from "@/components/FormSelectColors.vue";
import LayoutModal from "@/components/LayoutModal.vue";
import LayoutPreloader from "@/components/LayoutPreloader.vue";

export default {
  name: "ProductView",
  components: {
    FormSelectColors,
    FormSelect,
    BaseBreadcrumbs,
    FormCounterProduct,
    LayoutModal,
    LayoutPreloader,
    BaseTabs
  },
  data() {
    return {
      isProductLoading: false,
      isProductLoadingFailed: false,
      currentProductInfoData: []
    };
  },
  computed: {
    ...mapState(["productData"]),
    ...mapGetters([
      "currentProductCount",
      "currentProductAmount",
      "currentProductColor",
      "currentProductSize"
    ]),
    currentProductCountValue: {
      get() {
        return this.currentProductCount;
      },
      set(value) {
        this.updateCurrentProductCount(value);
      }
    },
    currentProductColorValue: {
      get() {
        return this.currentProductColor;
      },
      set(value) {
        this.updateCurrentProductColor(value);
      }
    },
    currentProductSizeValue: {
      get() {
        return this.currentProductSize;
      },
      set(value) {
        this.updateCurrentProductSize(value);
      }
    },
    breadcrumbsData() {
      return [
        {
          titlePage: "Каталог",
          routerName: "home"
        },
        {
          titlePage: this.productData.category.title,
          routerName: ""
        },
        {
          titlePage: this.productData.title,
          routerName: "",
          cursorNone: true
        }
      ];
    }
  },
  methods: {
    ...mapActions(["loadProductData", "addProductToBasket"]),
    ...mapMutations([
      "updateCurrentProductId",
      "updateCurrentProductCount",
      "updateCurrentProductPrice",
      "updateCurrentProductColor",
      "updateCurrentProductSize"
    ]),
    doLoadingProductData() {
      this.isProductLoading = true;
      this.isProductLoadingFailed = false;
      this.loadProductData()
        .then(() => (this.isProductLoading = false))
        .catch(() => (this.isProductLoadingFailed = true))
        .then(() => {
          this.isProductLoading = false;
          this.updateCurrentProductPrice(this.productData.price);
          this.getCurrentProductInfoData(this.productData.content);
        });
    },
    getGalleryImageUrl() {
      if (
        this.productData.colors &&
        this.productData.colors[this.currentProductColorValue] &&
        this.productData.colors[this.currentProductColorValue].gallery &&
        this.productData.colors[this.currentProductColorValue].gallery[0] &&
        this.productData.colors[this.currentProductColorValue].gallery[0]
          .file &&
        this.productData.colors[this.currentProductColorValue].gallery[0].file
          .url
      ) {
        return this.productData.colors[this.currentProductColorValue].gallery[0]
          .file.url;
      } else {
        return "";
      }
    },
    getCurrentProductInfoData(data) {
      if (data) {
        this.currentProductInfoData = data;
      } else {
        this.currentProductInfoData = TEMPLATE_PRODUCT_INFO;
      }
    },
    doAddProductToBasket() {
      this.addProductToBasket();
    }
  },
  created() {
    this.updateCurrentProductId(this.$route.params.id);
    this.doLoadingProductData();
  }
};
</script>
