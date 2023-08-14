import { createStore } from "vuex";
import { API_BASE_URL, TIMEOUT } from "@/configApp";
// import { setTimeout, resolve  } from "core-js";
import "core-js/stable/promise";
import axios from "axios";

export default createStore({
  state: {
    products: null,
    productsLoadung: false
  },
  getters: {},
  mutations: {
    updateProducts(state, data) {
      state.products = data;
    }
  },
  actions: {
    loadProducts(context) {
      context.state.productsLoadung = true;
      return new Promise((resolve) => setTimeout(resolve, TIMEOUT)).then(() => {
        return axios.get(API_BASE_URL + "products").then((response) => {
          context.commit("updateProducts", response.data);
          context.state.productsLoadung = false;
        });
      });
    }
  },
  modules: {}
});
