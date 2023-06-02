import axios from "axios";

function getProducts(callback) {
  axios
    .get("https://fakestoreapi.com/products")
    .then((response) => {
      callback(response.data);
      // callback mengembalikan nilai dengan parameter
    })
    .catch((error) => {
      console.log(error);
    });
}
export default getProducts;

export function getDetailsProduct(id,callback) {
  axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((response) => {
      callback(response.data);
      // callback mengembalikan nilai dengan parameter
    })
    .catch((error) => {
      console.log(error);
    });
}

