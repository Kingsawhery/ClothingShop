import React, { useState } from "react";
import "../../../../src/styles/scss/banner.css";
import "../../../../src/styles/scss/Banner/Banner.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useEffect } from "react";
import FormLogin from "../component-child/FormLogin";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
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
    "products",
    "about",
    "more",
    "blog",
    "channel",
    "contact",
  ];
  const subnavs = ["Menu1", "Menu2", "Menu3"];
  const [tab, setTab] = useState("");
  const [option, setOption] = useState(false);
  const [form, setForm] = useState(false);
  function closePopUp(e) {
    console.log(e.which);
    switch (e.which) {
      case 75:
    }
  }
  console.log(logo);

  useEffect(() => {
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
  }, []);
  return (
    <>
      <div id="header">
        <div className="header-section container">
          <Link to="/" id="logo-brand">
            <img
              ref={logo}
              src="../../../images/lemon-solid-24.png"
              alt=""
              style={{ width: 30 + "px" }}
            />
          </Link>
          <div className="menu">
            {categoryRoutes.map((categoryRoute, index) => {
              return (
                <li
                  key={index}
                  style={
                    tab === categories[index]
                      ? { background: "#ddd", color: "#333" }
                      : {}
                  }
                  onClick={() => setTab(categories[index])}
                >
                  {categories[index] === "Contact" ? (
                    <a>Contact</a>
                  ) : (
                    <Link to={`/${categoryRoute}`}>
                      {categories[index]}
                      <div className="subnav">
                        {categories[index] === "More" &&
                          subnavs.map((subnav,index) => {
                            return (
                              <li key={index}>
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
            <img
              ref={optionBar}
              img="../../../src/assets/images/bars-solid.svg"
              className="color-danger"
            />
            <ul className="menu">
              {categoryRoutes.map((categoryRoute, index) => {
                return (
                  <li
                  key={index}
                    style={
                      tab === categories[index]
                        ? { background: "#ddd", color: "#333" }
                        : {}
                    }
                    onClick={() => setTab(categories[index])}
                  >
                    {categories[index] === "Contact" ? (
                      <a>Contact</a>
                    ) : (
                      <Link to={`/${categoryRoute}`}>
                        {categories[index]}
                        <div className="subnav">
                          {categories[index] === "More" &&
                            subnavs.map((subnav,index) => {
                              return (
                                <li key={index}>
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

          <Stack direction="horizontal" gap={2}>
            <FontAwesomeIcon icon={faUser} />
            <div className="vr" />
            <FontAwesomeIcon icon={faUser} />
            <Form.Control
              className="me-auto" style={{width:"200px"}}
              placeholder="Add your item here..."
            />
          </Stack>
        </div>
      </div>
      {form && <FormLogin />}
    </>
  );
}
export default Banner;
