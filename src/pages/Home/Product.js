import Content from "../../views/components/Layouts/Content";
import { Link } from "react-router-dom";
import "../../../src/styles/scss/Content/Content.css";
import { useState,useEffect } from "react";
import CardProduct from "../../views/components/component-child/CardProduct";
function Product() {
  const [data, setData] = useState([]);
  const [count,setCount] = useState(0);
const [showProduct,setShowProduct] = useState(false)
const [isProductPage, setIsProductPage] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:3000/shirt`)
        .then((res) => res.json())
        .then((product) => setData(product));
    }, 200);
  }, []);
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
          {data && <CardProduct data={data} />}
        </div>
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
