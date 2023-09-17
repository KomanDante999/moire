import { createStore } from "vuex";
import { TIMEOUT, LIMIT_FOR_PAGINATED } from "@/configApp";
import {
  apiLoadProducts,
  apiLoadProductData,
  apiLoadFilterData,
  apiLoadBasket,
  apiAddToBasket,
  apiUpdateBasket,
  apiDeleteProductBasket,
  apiCreateOrder
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
    basketProductsData: [],
    // order
    userData: {
      name: "",
      address: "",
      phone: "",
      email: "",
      deliveryTypeId: 0,
      paymentTypeId: 0,
      comment: ""
    },
    orderErrorsData: {}
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
    },
    // basket
    basketTotalAmount(state) {
      return state.basketProductsData.reduce((accumulator, item) => {
        return accumulator + item.price * item.quantity;
      }, 0);
    },
    basketTotalItems(state) {
      return state.basketProductsData.length;
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
    },
    // order
    updateUserData(state, data) {
      state.userData.name = data.name;
      state.userData.address = data.address;
      state.userData.phone = data.phone;
      state.userData.email = data.email;
      state.userData.deliveryTypeId = data.deliveryTypeId;
      state.userData.paymentTypeId = data.paymentTypeId;
      state.userData.comment = data.comment;
    },
    updateOrderErrorsData(state, error) {
      state.orderErrorsData = error;
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
        colorId:
          context.state.productData.colors[context.state.currentProductColor]
            .color.id,
        sizeId:
          context.state.productData.sizes[context.state.currentProductSize].id,
        quantity: context.state.currentProductCount
      };
      return new Promise((resolve) => setTimeout(resolve, TIMEOUT)).then(() => {
        return apiAddToBasket(currentProductParams).then((data) => {
          context.commit("updateBasketProductsData", data.items);
        });
      });
    },
    updateBasket(context, value) {
      const currentProductParams = {
        key: context.state.userAccessKey,
        productId: value.productId,
        quantity: value.count
      };
      return new Promise((resolve) => setTimeout(resolve, 0)).then(() => {
        return apiUpdateBasket(currentProductParams).then((data) => {
          context.commit("updateBasketProductsData", data.items);
        });
      });
    },
    deleteProductBasket(context, value) {
      const currentProductParams = {
        key: context.state.userAccessKey,
        productId: value.productId
      };
      return new Promise((resolve) => setTimeout(resolve, 0)).then(() => {
        return apiDeleteProductBasket(currentProductParams).then((data) => {
          context.commit("updateBasketProductsData", data.items);
        });
      });
    },
    // order
    createOrder(context) {
      context.commit("updateOrderErrorsData", {});
      const orderParams = {
        key: context.state.userAccessKey,
        formData: context.userData
      };
      return new Promise((resolve) => setTimeout(resolve, TIMEOUT)).then(() => {
        return apiCreateOrder(orderParams)
          .then((data) => {
            console.log("then", data);
            context.commit("updateUserData", data);
          })
          .catch((error) => {
            console.log("catch", error);
            context.commit("updateOrderErrorsData", error);
          });
      });
    }
  },
  modules: {}
});
