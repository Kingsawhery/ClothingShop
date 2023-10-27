import ListProduct from "../component-child/ListProduct";
import "../../../../src/styles/scss/Content/Content.css";
import { Link } from "react-router-dom";
import Video from "./Video";
import { fetchProduct } from "../../../services/ProductService";
import { useEffect, useState ,useLayoutEffect} from "react";
import ReactPaginate from "react-paginate";
function Content() {
  const typeClothings = ["Shirt", "Pant"];
  const [typeProduct, setTypeProduct] = useState("shirt");
  const [data, setData] = useState([]);
  const [count,setCount] = useState(0)
  const [showProduct, setShowProduct] = useState(false);
  const [totalPage,setTotalPage] = useState(0)
  useEffect(() => {
    getProduct();
  }, [typeProduct]);
  const getProduct = async () => {
    let res = await fetchProduct(typeProduct);
    if (res) {
      setData(res);
      setTotalPage(res.length/4)
}
  };
  function handleSeeMore() {
    setShowProduct(!showProduct);
    setCount((prev) => prev + 1);
  }
  function handlePageClick() {}
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
                    key={typeClothing}
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
          {data && <ListProduct typeProduct={typeProduct} data={data} />}
        </div>
        <div className="see-more">
          {count>0 ? (<Link className="see-more-btn" to="/products">See More</Link>) : (<p class="see-more-btn" onClick={handleSeeMore}>Xem thêm</p>)}
        </div>
        
        <div id="video-produce">
          <Video></Video>
        </div>
      </div>
    </>
  );
}
export default Content;
