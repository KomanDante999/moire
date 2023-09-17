import { API_BASE_URL } from "@/configApp";
import "core-js/stable/promise";
import axios from "axios";

const apiLoadProducts = (params) => {
  return axios
    .get(API_BASE_URL + `products`, { params })
    .then((response) => response.data);
};
const apiLoadProductData = (idProduct) => {
  return axios
    .get(API_BASE_URL + `products/` + `${idProduct}`)
    .then((response) => response.data);
};
const apiLoadFilterData = (path) => {
  return axios.get(API_BASE_URL + `${path}`).then((response) => response.data);
};

// basket
const apiLoadBasket = (key) => {
  return axios
    .get(API_BASE_URL + `baskets`, {
      params: {
        userAccessKey: key
      }
    })
    .then((response) => response.data);
};

const apiAddToBasket = (params) => {
  return axios
    .post(
      API_BASE_URL + `baskets/products`,
      {
        productId: `${params.productId}`,
        colorId: `${params.colorId}`,
        sizeId: `${params.sizeId}`,
        quantity: `${params.quantity}`
      },
      {
        params: {
          userAccessKey: params.key
        }
      }
    )
    .then((response) => response.data);
};

const apiUpdateBasket = (params) => {
  return axios
    .put(
      API_BASE_URL + `baskets/products`,
      {
        basketItemId: `${params.productId}`,
        quantity: `${params.quantity}`
      },
      {
        params: {
          userAccessKey: params.key
        }
      }
    )
    .then((response) => response.data);
};

const apiDeleteProductBasket = (params) => {
  return axios
    .delete(API_BASE_URL + `baskets/products`, {
      params: { userAccessKey: params.key },
      data: { basketItemId: `${params.productId}` }
    })
    .then((response) => response.data);
};

const apiCreateOrder = (params) => {
  return axios
    .post(
      API_BASE_URL + "orders",
      {
        ...params.formData
      },
      {
        params: {
          userAccessKey: params.key
        }
      }
    )
    .then((response) => response.data)
    .catch((error) => {
      throw error.response.data.error.request;
    });
};

export {
  apiLoadProducts,
  apiLoadProductData,
  apiLoadFilterData,
  apiLoadBasket,
  apiAddToBasket,
  apiUpdateBasket,
  apiDeleteProductBasket,
  apiCreateOrder
};
