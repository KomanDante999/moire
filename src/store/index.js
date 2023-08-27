import { createStore } from "vuex";
import { API_BASE_URL, TIMEOUT, LIMIT_FOR_PAGINATED } from "@/configApp";
import "core-js/stable/promise";
import axios from "axios";

export default createStore({
  state: {
    products: null,
    productData: null,
    currentProductId: null,
    currentPagePagination: 1,
    paginationData: null,
    // filter
    minPrice: null,
    maxPrice: null,
    productCategories: [
      {
        id: 0,
        title: "Все категории",
        slug: "all-category"
      }
    ],
    currentProductCategories: 0,
    materialsData: [],
    materialsSelected: [],
    seasonsData: [],
    seasonsSelected: [],
    colorsData: [],
    colorsSelected: []
  },
  getters: {
    minPrice(state) {
      return state.minPrice;
    },
    maxPrice(state) {
      return state.maxPrice;
    },
    currentProductCategories(state) {
      return state.currentProductCategories;
    },
    materialsSelected(state) {
      return state.materialsSelected;
    },
    seasonsSelected(state) {
      return state.seasonsSelected;
    },
    colorsSelected(state) {
      return state.colorsSelected;
    }
  },
  mutations: {
    updateProducts(state, data) {
      state.products = data;
    },
    updateProductData(state, data) {
      state.productData = data;
    },
    updateCurrentProductId(state, value) {
      state.currentProductId = value;
    },
    updatePagination(state, data) {
      state.paginationData = data;
    },
    updateCurrentPage(state, value) {
      state.currentPagePagination = value;
    },
    updateMinPrice(state, value) {
      state.minPrice = value;
    },
    updateMaxPrice(state, value) {
      state.maxPrice = value;
    },
    updatepPoductCategories(state, data) {
      state.productCategories = [...state.productCategories, ...data];
    },
    updateCurrentProductCategories(state, value) {
      state.currentProductCategories = value;
    },
    updateMaterialsData(state, data) {
      state.materialsData = data;
    },
    updateMaterialsSelected(state, value) {
      state.materialsSelected = value;
    },
    updateSeasonsData(state, data) {
      state.seasonsData = data;
    },
    updateSeasonsSelected(state, value) {
      state.seasonsSelected = value;
    },
    updateColorsData(state, data) {
      state.colorsData = data;
    },
    updateColorsSelected(state, value) {
      state.colorsSelected = value;
    }
  },
  actions: {
    loadProducts(context) {
      return new Promise((resolve) => setTimeout(resolve, TIMEOUT)).then(() => {
        return axios
          .get(API_BASE_URL + `products`, {
            params: {
              page: context.state.currentPagePagination,
              limit: LIMIT_FOR_PAGINATED,
              minPrice: context.state.minPrice,
              maxPrice: context.state.maxPrice,
              categoryId: context.state.currentProductCategories,
              materialIds: context.state.materialsSelected,
              seasonIds: context.state.seasonsSelected,
              colorIds: context.state.colorsSelected
            }
          })
          .then((response) => {
            context.commit("updateProducts", response.data.items);
            context.commit("updatePagination", response.data.pagination);
          });
      });
    },
    loadProductData(context) {
      return new Promise((resolve) => setTimeout(resolve, TIMEOUT)).then(() => {
        return axios
          .get(API_BASE_URL + `products/` + `${context.state.currentProductId}`)
          .then((response) => {
            context.commit("updateProductData", response.data);
          });
      });
    },
    loadProductCategories(context) {
      return new Promise((resolve) => setTimeout(resolve, 0)).then(() => {
        return axios
          .get(API_BASE_URL + `productCategories`)
          .then((response) => {
            context.commit("updatepPoductCategories", response.data.items);
          })
          .catch();
      });
    },
    loadMaterialsData(context) {
      return new Promise((resolve) => setTimeout(resolve, 0)).then(() => {
        return axios.get(API_BASE_URL + `materials`).then((response) => {
          context.commit("updateMaterialsData", response.data.items);
        });
      });
    },
    loadSeasonsData(context) {
      return new Promise((resolve) => setTimeout(resolve, 0)).then(() => {
        return axios.get(API_BASE_URL + `seasons`).then((response) => {
          context.commit("updateSeasonsData", response.data.items);
        });
      });
    },
    loadColorsData(context) {
      return new Promise((resolve) => setTimeout(resolve, 0)).then(() => {
        return axios.get(API_BASE_URL + `colors`).then((response) => {
          context.commit("updateColorsData", response.data.items);
        });
      });
    }
  },
  modules: {}
});
