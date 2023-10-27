import Content from "../../views/components/Layouts/Content";
import { Link } from "react-router-dom";
import "../../../src/styles/scss/Content/Content.css";
import { useState, useEffect } from "react";
import ListProduct from "../../views/components/component-child/ListProduct";
import axios from "axios";
import { fetchProduct } from "../../services/ProductService";
import { Spinner } from "react-bootstrap";
function Product() {
const [data,setData] = useState([])
  const [count, setCount] = useState(0);
  const [showProduct, setShowProduct] = useState(false);
  const [loading,setLoading] = useState(true);
  useEffect(() => {
      setTimeout(()=>{
        getProduct();
      setLoading(false)
      },2000)
  },[])
  const getProduct = async()=>{
      let res = await fetchProduct("shirt");
      if(res ){
        setData(res);
      }
  }
  data.sort(function() {  
    return Math.random() - 0.5
})
  function handleSeeMore() {
    setShowProduct(!showProduct);
    setCount((prev) => prev + 1);
  }
  return (
    <>
      <div className="product" style={{ marginTop: "100px" }}>
        <div id="content">
          <div
            style={showProduct ? { height: "100%" } : {}}
            class="content-section container"
          >
            <div class="title-index">
              <p>All Product</p>
            </div>

            {loading ? (
            <div className="d-flex justify-content-center">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          ) : (
            data && <ListProduct data={data} />
          )}          </div>
          <div className="see-more">
            <p class="see-more-btn" onClick={handleSeeMore}>
              Xem thêm
            </p>{" "}
          </div>
        </div>
      </div>
    </>
  );
}
export default Product;
