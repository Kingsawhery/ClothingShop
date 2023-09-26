import React from "react";
import Banner from "./Component/Banner";
import Content from "./Component/Content";
import Slide from "./Component/Slide";
import "../../styles/scss/banner.css";
import LoadAPI from "./Component/Component-child/LoadAPI";
function Web() {
  return (
    <div className="main">
      <Banner />
      <Slide />
      <Content />
    </div>
  );
}
export default Web;
