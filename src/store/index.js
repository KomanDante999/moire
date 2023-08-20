import { createStore } from "vuex";
import { API_BASE_URL, TIMEOUT, LIMIT_FOR_PAGINATED } from "@/configApp";
import "core-js/stable/promise";
import axios from "axios";

export default createStore({
  state: {
    products: null,
    currentPagePagination: 1,
    paginationData: null
  },
  getters: {},
  mutations: {
    updateProducts(state, data) {
      state.products = data;
    },
    updatePagination(state, data) {
      state.paginationData = data;
    },
    updateCurrentPage(state, data) {
      state.currentPagePagination = data;
    }
  },
  actions: {
    loadProducts(context) {
      return new Promise((resolve) => setTimeout(resolve, TIMEOUT)).then(() => {
        return axios
          .get(API_BASE_URL + `products`, {
            params: {
              page: context.state.currentPagePagination,
              limit: LIMIT_FOR_PAGINATED
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
