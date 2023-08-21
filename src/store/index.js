import { createStore } from "vuex";
import { API_BASE_URL, TIMEOUT, LIMIT_FOR_PAGINATED } from "@/configApp";
import "core-js/stable/promise";
import axios from "axios";

export default createStore({
  state: {
    products: null,
    currentPagePagination: 1,
    paginationData: null,
    minPrice: null,
    maxPrice: null
  },
  getters: {
    minPrice(state) {
      return state.minPrice;
    },
    maxPrice(state) {
      return state.maxPrice;
    }
  },
  mutations: {
    updateProducts(state, data) {
      state.products = data;
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
              maxPrice: context.state.maxPrice
            }
          })
          .then((response) => {
            context.commit("updateProducts", response.data.items);
            context.commit("updatePagination", response.data.pagination);
          });
      });
    }
  },
  modules: {}
});
