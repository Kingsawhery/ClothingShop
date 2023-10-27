import axios from "./axios";
const fetchProduct = (typeProduct) => {
  return axios.get(`/${typeProduct}`);
};
const fetchDetailProduct = (typeProduct, id) => {
  return axios.get(`/${typeProduct}/${id}`);
};
const fetchAllProduct = () => {
    return
};
export { fetchProduct, fetchDetailProduct, fetchAllProduct };
