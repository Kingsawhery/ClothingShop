import React from "react";
import Banner from "../../views/components/Component/Layouts/Banner";
import Slide from "../../views/components/Component/Layouts/Slide";
import Content from "../../views/components/Component/Layouts/Content";
import Map from "../../views/components/Component/Layouts/Map";
import "../../styles/scss/banner.css";
function Web() {
  return (
    <div className="main">
      <Banner />
      {/* <CardTest /> */}
      <Slide />
      <Content />
    </div>
    //   <Map
    //     googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`}
    //     loadingElement={<div style={{ height: `100%` }} />}
    //     containerElement={
    //       <div
    //         style={{
    //           height: `90vh`,
    //           margin: `auto`,
    //           border: "2px solid black",
    //         }}
    //       />
    //     }
    //     mapElement={<div style={{ height: `100%` }} />}
    //   />
  );
}
export default Web;
