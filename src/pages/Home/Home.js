import React from "react";
import Banner from "../../views/components/Layouts/Banner";
import Slide from "../../views/components/Layouts/Slide";
import Content from "../../views/components/Layouts/Content";
import "../../styles/scss/banner.css";
function Home() {
  return (
    <div className="main">
      <Banner />
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
export default Home;
