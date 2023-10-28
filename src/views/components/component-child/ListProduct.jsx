import React, { useEffect } from "react";
import ReactPaginate from "react-paginate";
import CardProduct from "./CardProduct";
function ListProduct({ data }) {
  console.log("ListProduct");
  return data.map((course, index) => {
    if (index % 4 === 0) {
      return (
        <div key={index} className="product row">
          {data.slice(index, index + 4).map((product, index) => {
            return (
                <CardProduct data={product} key={index} />
            );
          })}
        </div>
      );
    }
  });
}
export default ListProduct;
