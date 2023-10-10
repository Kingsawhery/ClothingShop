import React from "react";
import iconHeart from "../../../../assets/images/bx-heart.svg";
import iconCart from "../../../../assets/images/bx-cart.svg";

function ShowCard({data}) {
  return data.map((course, index) => {
    if (index % 4 === 0) {
      return (
        <div key={index} className="product row">
          {data.slice(index, index + 4).map((course, index) => {
            return (
              <div
                  className="card col-lg-3 col-lg-6 col-md-6 col-sm-12"
                  key={index}
                >
                  <div className="card-heart">
                    <img src={iconHeart} alt="" />
                  </div>
                  <div className="card-cart">
                    <button>
                      <img src={iconCart} alt="Add to cart"></img>
                    </button>
                  </div>
                  <div className="card-img">
                    <img src={course.img} alt="" />
                  </div>
                  <div className="card-title">
                    <p>{course.name}</p>
                  </div>
                  <div className="card-price">{course.price}$</div>
                  <div className="card-action">
                    <button className="buy">Buy Now</button>
                    <button className="cart">Add Cart</button>
                  </div>
                </div>
                
          
            );
          })}
        </div>
      );
    }
    return null;
  });
}
export default ShowCard;
