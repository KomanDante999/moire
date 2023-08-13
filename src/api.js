import axios from "axios";
import "core-js/stable/promise";

export const loadProducts = (productsData) => {
  axios
    .get("https://vue-moire.skillbox.cc/api/products")
    .then((response) => (productsData = response.data));
  console.log(productsData);
};
