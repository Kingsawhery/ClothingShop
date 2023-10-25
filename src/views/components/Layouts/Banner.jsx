import React, { useState } from "react";
import "../../../../src/styles/scss/banner.css";
import "../../../../src/styles/scss/Banner/Banner.css";

import { Link } from "react-router-dom";
import { useRef } from "react";
import { useEffect } from "react";
function Banner() {
  const logo = useRef(null);
  const optionBar = useRef();
  
  const categories = [
    "Product",
    "About Us",
    "More",
    "Blog",
    "Channel",
    "Contact",
  ];
  const categoryRoutes = [
    "product",
    "about",
    "more",
    "blog",
    "channel",
    "contact",
  ];
  const subnavs = ["Menu1", "Menu2", "Menu3"];
  const [tab, setTab] = useState("");
  const [option, setOption] = useState(false);
  const [box, setBox] = useState(false);
  function closePopUp(e) {
    console.log(e.which);
    switch (e.which) {
      case 75:
        setBox(false);
    }
  }
  console.log(box);
  console.log(logo);
  
  useEffect(()=>{
    var logoAnimation = logo.current.animate(
      [
        {
          transform: "rotateX(360deg)",
        },
      ],
      {
        duration: 5000,
        iterations: Infinity,
      }
    );
  }, [])
  return (
    <>
      <div id="header">
        <div className="header-section container">
          <Link to="/">
            <img ref={logo} id="logo-brand" src="../../../images/lemon-solid-24.png" alt="" style={{ width: 30 + "px" }} />
          </Link>
          <div className="menu">
            {categoryRoutes.map((categoryRoute, index) => {
              return (
                <li
                  style={
                    tab === categories[index]
                      ? { background: "#ddd", color: "#333" }
                      : {}
                  }
                  onClick={() => setTab(categories[index])}
                >
                  {categories[index] === "Contact" ? (
                    <a onClick={() => setBox(!box)
                  }>Contact</a>
                  ) : (
                    <Link to={`/${categoryRoute}`}>
                      {categories[index]}
                      <div className="subnav">
                        {categories[index] === "More" &&
                          subnavs.map((subnav) => {
                            return (
                              <li>
                                <a>{subnav}</a>
                              </li>
                            );
                          })}
                      </div>
                    </Link>
                  )}
                </li>
              );
            })}
          </div>
          <li className="option">
            <img ref={optionBar} img="../../../src/assets/images/bars-solid.svg" className="color-danger" />
            <ul className="menu">

            {categoryRoutes.map((categoryRoute, index) => {
              return (
                <li
                  style={
                    tab === categories[index]
                      ? { background: "#ddd", color: "#333" }
                      : {}
                  }
                  onClick={() => setTab(categories[index])}
                >
                  {categories[index] === "Contact" ? (
                    <a onClick={() => setBox(!box)
                  }>Contact</a>
                  ) : (
                    <Link to={`/${categoryRoute}`}>
                      {categories[index]}
                      <div className="subnav">
                        {categories[index] === "More" &&
                          subnavs.map((subnav) => {
                            return (
                              <li>
                                <a>{subnav}</a>
                              </li>
                            );
                          })}
                      </div>
                    </Link>
                  )}
                </li>
              );
            })}
            </ul>
          </li>

          <div className="bg-body">
            <a href="{}" className="search">
              <i className="fa-solid fa-magnifying-glass"></i>
            </a>
            <input
              type="text"
              placeholder="Search here..."
              className="input-group form-control"
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Banner;
