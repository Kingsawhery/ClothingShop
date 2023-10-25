import CardProduct from "../component-child/CardProduct";
import "../../../../src/styles/scss/Content/Content.css";
import { useState, useEffect,useRef } from "react";
import {Link} from "react-router-dom"
import ProductDetailModal from "../../../pages/Home/DetailProduct";

function Content() {
  const typeClothings = ["Shirt", "Pant"];
  const [typeProduct, setTypeProduct] = useState("shirt");
  const [data, setData] = useState([]);
  const [count,setCount] = useState(0);
const [showProduct,setShowProduct] = useState(false)
const [isProductPage, setIsProductPage] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:3000/${typeProduct}`)
        .then((res) => res.json())
        .then((product) => setData(product));
    }, 200);
  }, [typeProduct]);
  function handleSeeMore() {
    setShowProduct(!showProduct);
    setCount(prev => prev+1);
  }
  return (
    <>
      <div id="content">
        <div
          style={showProduct ? { height: "100%" } : {}}
          class="content-section container"
        >
          <div class="title-index">
            <p>New Arrivals</p>
            <div className="fil-product">
              {typeClothings.map((typeClothing) => {
                return (
                  <div
                    className="type-product"
                    style={
                      typeProduct === typeClothing
                        ? { background: "#333", color: "#ddd" }
                        : {}
                    }
                    onClick={() => {
                      setTypeProduct(typeClothing);
                    }}
                  >
                    {typeClothing}
                  </div>
                );
              })}
            </div>
          </div>
          {data && (
            <CardProduct
              typeProduct={typeProduct}
              data={data}
            />
          )}
        </div>
        <div className="see-more">
          {count>0 ? (<Link className="see-more-btn" to="/product">See More</Link>) : (<p class="see-more-btn" onClick={handleSeeMore}>Xem thêm</p>)}
        </div>
      </div>
    </>
  );
}
export default Content;
