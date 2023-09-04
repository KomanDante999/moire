<template>
  <aside>
    <form @submit.prevent="submitFilter" class="px-6 pb-7">
      <fieldset class="mb-8">
        <legend class="form-legend">Цена</legend>
        <label class="filter-label label-price">
          <input v-model.number="minPriceValue" class="form-input-style" />
          <span class="filter-cuption">От</span>
          <span v-if="!isPriceValid" class="input-error"
            >Минимальная цена больше максимальтной</span
          >
        </label>
        <label class="filter-label label-price">
          <input v-model.number="maxPriceValue" class="form-input-style" />
          <span class="filter-cuption">До</span>
          <span v-if="!isPriceValid" class="input-error"
            >Максимальная цена меньше минимальной</span
          >
        </label>
      </fieldset>

      <fieldset class="mb-8">
        <legend class="form-legend">Категория</legend>
        <label class="filter-label">
          <FormSelect
            :categoriesData="productCategories"
            v-model:selectedItem="currentProductCategoriesValue"
            class="h-[52px] py-[14px] pr-9 pl-[18px]"
          />
        </label>
      </fieldset>

      <fieldset class="mb-8">
        <legend class="form-legend">Цвет</legend>
        <label class="filter-label">
          <FormSelectColorsCheckbox
            :categoriesData="colorsData"
            v-model:selectedItems="colorsSelectedValue"
          />
        </label>
      </fieldset>

      <fieldset class="mb-8">
        <legend class="form-legend">Материал</legend>
        <FormCheckbox
          :categoriesData="materialsData"
          v-model:selectedItems="materialsSelectedValue"
        />
      </fieldset>

      <fieldset class="mb-8">
        <legend class="form-legend">Коллекция</legend>
        <FormCheckbox
          :categoriesData="seasonsData"
          v-model:selectedItems="seasonsSelectedValue"
        />
      </fieldset>

      <button
        class="w-full mb-4 button-style button-primary bg-alarm"
        type="submit"
      >
        Применить
      </button>
      <button
        @click.prevent="resetFilter"
        class="w-36 p-4 button-style button-second"
        type="button"
      >
        Сбросить
      </button>
    </form>
    <LayoutModal :open="isProductsLoading">
      <LayoutPreloader />
    </LayoutModal>
  </aside>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
import FormCheckbox from "./FormCheckbox.vue";
import FormSelect from "./FormSelect.vue";
import FormSelectColorsCheckbox from "./FormSelectColorsCheckbox.vue";
import LayoutModal from "./LayoutModal.vue";
import LayoutPreloader from "./LayoutPreloader.vue";

export default {
  name: "ProductFilter",
  components: {
    FormSelect,
    FormCheckbox,
    FormSelectColorsCheckbox,
    LayoutModal,
    LayoutPreloader
  },
  data() {
    return {
      isPriceValid: true,
      isProductsLoading: false,
      isProductsLoadingFailed: false
    };
  },
  computed: {
    ...mapState([
      "productCategories",
      "materialsData",
      "seasonsData",
      "colorsData"
    ]),
    ...mapGetters([
      "minPrice",
      "maxPrice",
      "currentProductCategories",
      "materialsSelected",
      "seasonsSelected",
      "colorsSelected"
    ]),
    minPriceValue: {
      get() {
        return this.minPrice;
      },
      set(value) {
        this.updateMinPrice(value);
      }
    },
    maxPriceValue: {
      get() {
        return this.maxPrice;
      },
      set(value) {
        this.updateMaxPrice(value);
      }
    },
    currentProductCategoriesValue: {
      get() {
        return this.currentProductCategories;
      },
      set(value) {
        this.updateCurrentProductCategories(value);
      }
    },
    materialsSelectedValue: {
      get() {
        return this.materialsSelected;
      },
      set(value) {
        this.updateMaterialsSelected(value);
      }
    },
    seasonsSelectedValue: {
      get() {
        return this.seasonsSelected;
      },
      set(value) {
        this.updateSeasonsSelected(value);
      }
    },
    colorsSelectedValue: {
      get() {
        return this.colorsSelected;
      },
      set(value) {
        this.updateColorsSelected(value);
      }
    }
  },

  methods: {
    ...mapActions([
      "loadFilterData",
      "loadProducts",
      "loadProductCategories",
      "loadMaterialsData",
      "loadSeasonsData",
      "loadColorsData"
    ]),
    ...mapMutations([
      "updateMinPrice",
      "updateMaxPrice",
      "updateCurrentProductCategories",
      "updateMaterialsSelected",
      "updateSeasonsSelected",
      "updateColorsSelected"
    ]),
    doLoadingProducts() {
      this.isProductsLoading = true;
      this.isProductsLoadingFailed = false;
      this.loadProducts()
        .then(() => (this.isProductsLoading = false))
        .catch(() => (this.isProductsLoadingFailed = true))
        .then(() => (this.isProductsLoading = false));
    },
    submitFilter() {
      if (this.maxPrice && this.maxPrice && this.maxPrice < this.minPrice) {
        this.isPriceValid = false;
      } else {
        this.doLoadingProducts();
      }
    },
    resetFilter() {
      this.isPriceValid = true;
      this.updateMinPrice(null);
      this.updateMaxPrice(null);
      this.updateCurrentProductCategories(0);
      this.updateMaterialsSelected([]);
      this.updateSeasonsSelected([]);
      this.updateColorsSelected([]);
      this.doLoadingProducts();
    }
  },
  created() {
    this.loadFilterData();
    // this.loadProductCategories();
    // this.loadMaterialsData();
    // this.loadSeasonsData();
    // this.loadColorsData();
  }
};
</script>
