import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  const [product,setProduct] = useState({})
  const {id} = useParams();
  console.log(id);
  console.log(product);
  useEffect(()=>{
    axios.get(`http://localhost:3000/shirt/${id}`)
    .then((res)=>setProduct(res.data))
  },[])
  console.log(product);
  return (
    <div className="detail-product">
      <div className="image-product">
          {product.name}
      </div>
    </div>
  );
};

export default ProductDetail;
