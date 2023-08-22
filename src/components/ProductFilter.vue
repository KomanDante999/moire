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

      <fieldset class="mb-8">
        <legend class="form-legend">Материал</legend>
        <ul>
          <li class="check-list__item">
            <label class="check-list__label">
              <input
                class="check-list__check sr-only"
                type="checkbox"
                name="material"
                value="лен"
              />
              <span class="check-list__desc">
                лен
                <span>(3)</span>
              </span>
            </label>
          </li>
          <li class="check-list__item">
            <label class="check-list__label">
              <input
                class="check-list__check sr-only"
                type="checkbox"
                name="material"
                value="хлопок"
              />
              <span class="check-list__desc">
                хлопок
                <span>(46)</span>
              </span>
            </label>
          </li>
          <li class="check-list__item">
            <label class="check-list__label">
              <input
                class="check-list__check sr-only"
                type="checkbox"
                name="material"
                value="шерсть"
              />
              <span class="check-list__desc">
                шерсть
                <span>(20)</span>
              </span>
            </label>
          </li>
          <li class="check-list__item">
            <label class="check-list__label">
              <input
                class="check-list__check sr-only"
                type="checkbox"
                name="material"
                value="шелк"
              />
              <span class="check-list__desc">
                шелк
                <span>(30)</span>
              </span>
            </label>
          </li>
        </ul>
      </fieldset>

      <fieldset class="mb-8">
        <legend class="form-legend">Коллекция</legend>
        <ul class="check-list">
          <li class="check-list__item">
            <label class="check-list__label">
              <input
                class="check-list__check sr-only"
                type="checkbox"
                name="collection"
                value="лето"
              />
              <span class="check-list__desc">
                лето
                <span>(2)</span>
              </span>
            </label>
          </li>
          <li class="check-list__item">
            <label class="check-list__label">
              <input
                class="check-list__check sr-only"
                type="checkbox"
                name="collection"
                value="зима"
              />
              <span class="check-list__desc">
                зима
                <span>(53)</span>
              </span>
            </label>
          </li>
          <li class="check-list__item">
            <label class="check-list__label">
              <input
                class="check-list__check sr-only"
                type="checkbox"
                name="collection"
                value="весна"
              />
              <span class="check-list__desc">
                весна
                <span>(24)</span>
              </span>
            </label>
          </li>
          <li class="check-list__item">
            <label class="check-list__label">
              <input
                class="check-list__check sr-only"
                type="checkbox"
                name="collection"
                value="осень"
              />
              <span class="check-list__desc">
                осень
                <span>(30)</span>
              </span>
            </label>
          </li>
        </ul>
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
import FormSelect from "./FormSelect.vue";

export default {
  name: "ProductFilter",
  components: { FormSelect },
  data() {
    return {
      isPriceValid: true,
      isProductCategoriesLoading: false,
      isProductCategoriesLoadingFailed: false
    };
  },
  computed: {
    ...mapState(["productCategories", "materialsData"]),
    ...mapGetters([
      "minPrice",
      "maxPrice",
      "currentProductCategories",
      "materialsSelected"
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
    }
  },

  methods: {
    ...mapActions([
      "loadProducts",
      "loadProductCategories",
      "loadMaterialsData"
    ]),
    ...mapMutations([
      "updateMinPrice",
      "updateMaxPrice",
      "updateCurrentProductCategories",
      "updateMaterialsSelected"
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
      this.loadProducts();
    }
  },
  created() {
    this.doLoadProductCategories();
    this.loadMaterialsData();
  }
};
</script>
