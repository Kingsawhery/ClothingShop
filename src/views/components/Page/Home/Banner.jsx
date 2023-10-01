import React, { useState } from "react";
import logo from "../../../../assets/images/lemon-solid-24.png";
import "../../../../styles/scss/Banner/Banner.css";
import barSolid from "../../../../assets/images/bars-solid.svg";
function Banner() {
  const [option, setOption] = useState(false);
  const [box, setBox] = useState(false);
  function closePopUp(e) {
    console.log(e.which);
    switch (e.which) {
      case 75:
        setBox(false);
    }
  }
  function handleClickOption() {
    setOption(!option);
  }
  function handleClickModal() {
    setBox(!box);
  }
  var classModal = box ? "show-modal" : "";
  var classOption = option ? "show-option menu" : "menu";

  // var tagModal = document.getElementById(".card-contact");
  return (
    <>
      <div id="header">
        <div className="header-section container">
          <a
            href={`https://www.facebook.com/profile.php?id=100007275730549`}
            className="icon"
            target="_blank"
          >
            <a href=""></a>
            <img src={logo} alt="" style={{ width: 30 + "px" }} />
          </a>
          <div className="menu">
            <li>
              <a href={`https://www.youtube.com/`} target="_blank">
                Band
              </a>
            </li>
            <li>
              <a href="#content">Product</a>
            </li>
            <li>
              <a href="{}">More</a>

              <i className="fa-solid fa-chevron-down down"></i>
              <ul className="subnav">
                <li>
                  <a href="{}">HTML</a>
                </li>
                <li>
                  <a href="{}">CSS</a>
                </li>
                <li>
                  <a href="{}">Javascript</a>
                  <ul className="subnav">
                    <li>
                      <a href="{}">HTML</a>
                    </li>
                    <li>
                      <a href="{}">CSS</a>
                    </li>
                    <li>
                      <a href="{}">Javascript</a>
                    </li>
                    <li>
                      <a href="{}">PHP</a>
                    </li>
                    <li>
                      <a href="{}">Python</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="{}">PHP</a>
                </li>
                <li>
                  <a href="{}">Python</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#img-bg">Blog</a>
            </li>
            <li>
              <a href="{}">Channel</a>
            </li>
            <li className="contact" onClick={handleClickModal}>
              <a>Contact</a>
            </li>
          </div>
          <li className="option" onClick={handleClickOption}>
            <img src={barSolid} className="color-danger" />
            <div className={classOption}>
              <li>
                <a href="{#}">Band</a>
              </li>
              <li>
                <a href="#content">Product</a>
              </li>
              <li>
                <a href="{}">More</a>
                <i className="fa-solid fa-chevron-down down"></i>
                <ul className="subnav">
                  <li>
                    <a href="{}">HTML</a>
                  </li>
                  <li>
                    <a href="{}">CSS</a>
                  </li>
                  <li>
                    <a href="{}">Javascript</a>
                    <ul className="subnav">
                      <li>
                        <a href="{}">HTML</a>
                      </li>
                      <li>
                        <a href="{}">CSS</a>
                      </li>
                      <li>
                        <a href="{}">Javascript</a>
                      </li>
                      <li>
                        <a href="{}">PHP</a>
                      </li>
                      <li>
                        <a href="{}">Python</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="{}">PHP</a>
                  </li>
                  <li>
                    <a href="{}">Python</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#img-bg">Blog</a>
              </li>
              <li>
                <a href="{}">Channel</a>
              </li>
              <li className="contact" onClick={handleClickModal}>
                <a href="#footer">Contact</a>
              </li>
            </div>
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
      <div id="box-contact" className={classModal} onKeyDown={closePopUp}>
        <div className="card-contact container col-6 ">
          <form class="row g-3 text-white fs-5">
            <div className="col-md-12 header-contact">
              <p></p>
              <h2 className="text-center text-white">Contact with us</h2>

              <input
                type="button"
                className="btn btn-secondary fs-4"
                value="X"
                onClick={handleClickModal}
              />
            </div>
            <div class="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">
                Email
              </label>
              <input type="email" class="form-control" id="inputEmail4" />
            </div>
            <div class="col-md-6">
              <label for="inputPassword4" class="form-label">
                Password
              </label>
              <input type="password" class="form-control" id="inputPassword4" />
            </div>
            <div class="col-12">
              <label for="inputAddress" class="form-label">
                Address
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
              />
            </div>
            <div class="col-12">
              <label for="inputAddress2" class="form-label">
                Address 2
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress2"
                placeholder="Apartment, studio, or floor"
              />
            </div>
            <div class="col-md-6">
              <label for="inputCity" class="form-label">
                City
              </label>
              <input type="text" class="form-control" id="inputCity" />
            </div>
            <div class="col-md-4">
              <label for="inputState" class="form-label">
                State
              </label>
              <select id="inputState" class="form-select">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div class="col-md-2">
              <label for="inputZip" class="form-label">
                Zip
              </label>
              <input type="text" class="form-control" id="inputZip" />
            </div>
            <div class="col-12">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label class="form-check-label" for="gridCheck">
                  Check me out
                </label>
              </div>
            </div>
            <div class="col-12">
              <button type="submit" class="btn btn-primary">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Banner;
