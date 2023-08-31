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

export { apiLoadProducts, apiLoadProductData, apiLoadFilterData };
