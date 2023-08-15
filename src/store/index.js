import { createStore } from "vuex";
import { API_BASE_URL, TIMEOUT } from "@/configApp";
import "core-js/stable/promise";
import axios from "axios";

export default createStore({
  state: {
    products: null
  },
  getters: {},
  mutations: {
    updateProducts(state, data) {
      state.products = data;
    }
  },
  actions: {
    loadProducts(context) {
      return new Promise((resolve) => setTimeout(resolve, TIMEOUT)).then(() => {
        return axios.get(API_BASE_URL + "products").then((response) => {
          context.commit("updateProducts", response.data);
        });
      });
    }
  },
  modules: {}
});
