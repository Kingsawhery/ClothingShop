import React from "react";
import Banner from "./Page/Home/Banner";
import Content from "./Page/Home/Content";
import Slide from "./Page/Home/Slide";
import "../../styles/scss/banner.css";
import LoadAPI from "./Component/Component-child/LoadAPI";
import CardTest from "./Component/Component-child/CardTest";
function Web() {
  return (
    <div className="main">
      <Banner />
      {/* <CardTest /> */}
      <Slide />
      <Content />
    </div>
  );
}
export default Web;
