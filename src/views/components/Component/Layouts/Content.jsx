import ShowCard from "../Component-child/ShowCard";

import "../../../../styles/scss/Content/Content.css";
import { useState, useEffect } from "react";

function Content() {
  const typeClothings = ["shirt", "pants"];
  const [typeProduct, setTypeProduct] = useState("shirt");

  const [data, setData] = useState([]);
  const [showProduct, setShowProduct] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3000/${typeProduct}`)
      .then((res) => res.json())
      .then((product) => setData(product));
  }, [typeProduct]);
  function handleSeeMore() {
    setShowProduct(!showProduct);
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
          {data && <ShowCard data={data}></ShowCard>}
        </div>
        <div className="see-more" onClick={handleSeeMore}>
          More
        </div>
      </div>
    </>
  );
}
export default Content;
