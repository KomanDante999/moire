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
        <form class="" action="#" method="POST">
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

    <div class="md:col-span-2">
      <ul class="flex items-center border-b border-secondary/60">
        <li class="tabs__item">
          <button class="tabs__btn tabs__btn--current">
            Информация о товаре
          </button>
        </li>
        <li class="tabs__item">
          <button class="tabs__btn">Доставка и возврат</button>
        </li>
      </ul>

      <div class="pt-12">
        <h3 class="mb-[6px] title-h3">Состав:</h3>

        <p class="mb-5 font-light leading-7">
          60% хлопок<br />
          30% полиэстер<br />
        </p>

        <h3 class="mb-[6px] title-h3">Уход:</h3>

        <p class="mb-5 font-light leading-7">
          Машинная стирка при макс. 30ºC короткий отжим<br />
          Гладить при макс. 110ºC<br />
          Не использовать машинную сушку<br />
          Отбеливать запрещено<br />
          Не подвергать химчистке<br />
        </p>
      </div>
    </div>
  </section>
  <LayoutModal :open="isProductLoading">
    <LayoutPreloader />
  </LayoutModal>
</template>

<script>
import BaseBreadcrumbs from "@/components/BaseBreadcrumbs.vue";
import FormCounterProduct from "@/components/FormCounterProduct.vue";
import FormSelect from "@/components/FormSelect.vue";
import FormSelectColors from "@/components/FormSelectColors.vue";
import LayoutModal from "@/components/LayoutModal.vue";
import LayoutPreloader from "@/components/LayoutPreloader.vue";
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";

export default {
  name: "ProductView",
  components: {
    FormSelectColors,
    FormSelect,
    BaseBreadcrumbs,
    FormCounterProduct,
    LayoutModal,
    LayoutPreloader
  },
  data() {
    return {
      isProductLoading: false,
      isProductLoadingFailed: false,
      currentColorNumber: 0
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
    ...mapActions(["loadProductData"]),
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
        });
    },
    getGalleryImageUrl() {
      if (
        this.productData.colors &&
        this.productData.colors[this.currentColorNumber] &&
        this.productData.colors[this.currentColorNumber].gallery &&
        this.productData.colors[this.currentColorNumber].gallery[0] &&
        this.productData.colors[this.currentColorNumber].gallery[0].file &&
        this.productData.colors[this.currentColorNumber].gallery[0].file.url
      ) {
        return this.productData.colors[this.currentColorNumber].gallery[0].file
          .url;
      } else {
        return "";
      }
    }
  },
  created() {
    this.updateCurrentProductId(this.$route.params.id);
    // this.updateCurrentProductCount(1);

    this.doLoadingProductData();
  }
};
</script>
