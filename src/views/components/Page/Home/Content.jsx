import ShowCard from "../../../components/Component/Component-child/ShowCard";

import "../../../../styles/scss/Content/Content.css";
import { useState,useEffect } from "react";

function Content() {
  var callProduct = "http://localhost:3000/course";
  const [data, setData] = useState([]);
  useEffect(()=> {
    fetch(callProduct)
    .then(res => res.json())
    .then(product => setData(product))
  },[])
  return (
    <>
      <div id="content">
        <div class="content-section container">
          <div class="title-index">
            <p>New Arrivals</p>
          </div>
          <ShowCard 
          key = {data.id}
          data = {data}/>
        </div>
      </div>
    </>
  );
}
export default Content;
