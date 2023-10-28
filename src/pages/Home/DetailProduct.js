import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../../styles/scss/DetailProduct/DetailProduct.css";
import { Spinner } from "react-bootstrap";
import { fetchDetailProduct } from "../../services/ProductService";
const ProductDetail = () => {
  const [data, setData] = useState({});
  const { id, typeProduct } = useParams();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      getProduct();
      setLoading(false);
    }, 2000);
  }, []);
  const getProduct = async () => {
    let res = await fetchDetailProduct(typeProduct, id);
    if (res) {
      setData(res);
    }
  };
  return loading ? (
    <div className="d-flex justify-content-center">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  ) : (
    data && data.length > 0 &&
    <div className="detail-product container">
      <div className="image-product">
        <img src="../../../images/img1.jpg" class="img1"></img>
      </div>
      <div className="info-product">{data.name}</div>
    </div>
  );
};

export default ProductDetail;
