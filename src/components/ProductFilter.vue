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
        <label v-if="productCategories" class="filter-label">
          <FormSelect
            :categoriesData="productCategories"
            v-model:selectedItem="currentProductCategoriesValue"
            class="h-[52px] py-[14px] pr-9 pl-[18px]"
          />
        </label>
      </fieldset>

      <fieldset v-if="materialsData" class="mb-8">
        <legend class="form-legend">Материал</legend>
        <FormCheckbox
          :categoriesData="materialsData"
          v-model:selectedItems="materialsSelectedValue"
        />
      </fieldset>

      <fieldset v-if="seasonsData" class="mb-8">
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
  </aside>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
import FormCheckbox from "./FormCheckbox.vue";
import FormSelect from "./FormSelect.vue";

export default {
  name: "ProductFilter",
  components: { FormSelect, FormCheckbox },
  data() {
    return {
      isPriceValid: true,
      isProductCategoriesLoading: false,
      isProductCategoriesLoadingFailed: false
    };
  },
  computed: {
    ...mapState(["productCategories", "materialsData", "seasonsData"]),
    ...mapGetters([
      "minPrice",
      "maxPrice",
      "currentProductCategories",
      "materialsSelected",
      "seasonsSelected"
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
    }
  },

  methods: {
    ...mapActions([
      "loadProducts",
      "loadProductCategories",
      "loadMaterialsData",
      "loadSeasonsData"
    ]),
    ...mapMutations([
      "updateMinPrice",
      "updateMaxPrice",
      "updateCurrentProductCategories",
      "updateMaterialsSelected",
      "updateSeasonsSelected"
    ]),
    doLoadProductCategories() {
      this.isProductCategoriesLoading = true;
      this.isProductCategoriesLoadingFailed = false;
      this.loadProductCategories()
        .then(() => (this.isProductCategoriesLoading = false))
        .catch(() => (this.isProductCategoriesLoadingFailed = true))
        .then(() => (this.isProductCategoriesLoading = false));
    },
    submitFilter() {
      if (this.maxPrice && this.maxPrice && this.maxPrice < this.minPrice) {
        this.isPriceValid = false;
      } else {
        this.loadProducts();
      }
    },
    resetFilter() {
      this.isPriceValid = true;
      this.updateMinPrice(null);
      this.updateMaxPrice(null);
      this.updateCurrentProductCategories(0);
      this.updateMaterialsSelected([]);
      this.updateSeasonsSelected([]);
      this.loadProducts();
    }
  },
  created() {
    this.doLoadProductCategories();
    this.loadMaterialsData();
    this.loadSeasonsData();
  }
};
</script>
