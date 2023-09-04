import { createStore } from "vuex";
import { TIMEOUT, LIMIT_FOR_PAGINATED } from "@/configApp";
import {
  apiLoadProducts,
  apiLoadProductData,
  apiLoadFilterData,
  apiLoadBasket,
  apiAddToBasket
} from "@/apiService";
import "core-js/stable/promise";
import { Promise } from "core-js";

export default createStore({
  state: {
    products: null,
    productData: null,
    currentProductId: null,
    currentProductCount: 1,
    currentProductPrice: null,
    currentProductAmount: null,
    currentProductColor: 0,
    currentProductSize: 0,
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
    colorsSelected: [],

    // basket
    userAccessKey: null,
    basketProductsData: []
  },
  getters: {
    currentProductColor(state) {
      return state.currentProductColor;
    },
    currentProductSize(state) {
      return state.currentProductSize;
    },
    currentProductCount(state) {
      return state.currentProductCount;
    },
    currentProductAmount(state) {
      return (state.currentProductAmount =
        state.currentProductPrice * state.currentProductCount);
    },
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
    updateCurrentProductCount(state, value) {
      state.currentProductCount = value;
    },
    updateCurrentProductPrice(state, value) {
      state.currentProductPrice = value;
    },
    updateCurrentProductColor(state, value) {
      state.currentProductColor = value;
    },
    updateCurrentProductSize(state, value) {
      state.currentProductSize = value;
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
    },
    // bascet
    updateUserAccessKey(state, value) {
      state.userAccessKey = value;
    },
    updateBasketProductsData(state, data) {
      state.basketProductsData = data;
    }
  },
  actions: {
    loadProducts(context) {
      return new Promise((resolve) => setTimeout(resolve, TIMEOUT))
        .then(() => {
          return apiLoadProducts({
            page: context.state.currentPagePagination,
            limit: LIMIT_FOR_PAGINATED,
            minPrice: context.state.minPrice,
            maxPrice: context.state.maxPrice,
            categoryId:
              context.state.productCategories[
                context.getters.currentProductCategories
              ].id,
            materialIds: context.state.materialsSelected,
            seasonIds: context.state.seasonsSelected,
            colorIds: context.state.colorsSelected
          });
        })
        .then((data) => {
          context.commit("updateProducts", data.items);
          context.commit("updatePagination", data.pagination);
        });
    },
    loadProductData(context) {
      return new Promise((resolve) => setTimeout(resolve, TIMEOUT)).then(() => {
        return apiLoadProductData(context.state.currentProductId).then(
          (data) => {
            context.commit("updateProductData", data);
          }
        );
      });
    },
    loadFilterData(context) {
      const filterData = [
        { path: "productCategories", mutation: "updatepPoductCategories" },
        { path: "materials", mutation: "updateMaterialsData" },
        { path: "seasons", mutation: "updateSeasonsData" },
        { path: "colors", mutation: "updateColorsData" }
      ];
      const promises = [];

      for (const { path, mutation } of filterData) {
        const promise = new Promise((resolve) => setTimeout(resolve, 0))
          .then(() => apiLoadFilterData(path))
          .then((data) => {
            context.commit(mutation, data.items);
          });
        promises.push(promise);
      }
      return Promise.all(promises);
    },

    // basket
    loadBasket(context) {
      return new Promise((resolve) => setTimeout(resolve, TIMEOUT)).then(() => {
        const storedAccessKey = localStorage.getItem("userAccessKey");
        if (storedAccessKey && !context.state.userAccessKey) {
          context.commit("updateUserAccessKey", storedAccessKey);
        }
        return apiLoadBasket(context.state.userAccessKey).then((data) => {
          if (!context.state.userAccessKey) {
            localStorage.setItem("userAccessKey", data.user.accessKey);
            context.commit("updateUserAccessKey", data.user.accessKey);
          }
          context.commit("updateBasketProductsData", data.items);
        });
      });
    },
    addProductToBasket(context) {
      const currentProductParams = {
        key: context.state.userAccessKey,
        productId: context.state.currentProductId,
        colorId: context.state.currentProductColor,
        sizeId: context.state.currentProductSize,
        quantity: context.state.currentProductCount
      };
      return new Promise((resolve) => setTimeout(resolve, TIMEOUT)).then(() => {
        return apiAddToBasket(currentProductParams).then((data) => {
          context.commit("updateBasketProductsData", data.items);
        });
      });
    }
  },
  modules: {}
});
