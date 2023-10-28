import { useEffect } from "react";
import axios from "./axios";
const fetchProduct = (typeProduct) => {
  return axios.get(`/${typeProduct}`);
};
const fetchDetailProduct = (typeProduct, id) => {
  return axios.get(`/${typeProduct}/${id}`);
};
const fetchAllProduct = async() => {
    let allProduct = [];
    await axios.get("/shirt")
    .then((res)=>{
       allProduct.push(...res)
       console.log(allProduct);
    }).then(axios.get("/pant").then((res)=>{
     allProduct.push(...res)
     console.log(allProduct);
    }))
return allProduct;
 
};
export { fetchProduct, fetchDetailProduct, fetchAllProduct };
