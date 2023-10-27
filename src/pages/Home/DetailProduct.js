import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../../styles/scss/DetailProduct/DetailProduct.css"
import { fetchDetailProduct } from "../../services/ProductService";
const ProductDetail = () => {
  const [data,setData] = useState({})
  const {id,typeProduct} = useParams();
  useEffect(() => {
    getProduct();
  },[]);
  const getProduct = async()=>{
    let res = await fetchDetailProduct(typeProduct,id);
    if(res){
      setData(res)
    }

  }
  return (
    <div className="detail-product container">
      <div className="image-product">
          <img src="../../../images/img1.jpg" class="img1"></img>
      </div>
      <div className="info-product">
        {data.name}
      </div>
    </div>
  );
};

export default ProductDetail;
