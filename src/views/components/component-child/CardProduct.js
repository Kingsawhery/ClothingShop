import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
export default function CardProduct({data}){
    return(
        <div
        className="card col-lg-3 col-lg-6 col-md-6 col-sm-12"
        
      >
        <div className="card-heart">
        <FontAwesomeIcon icon={faHeart} style={{fontSize:"18px"}}></FontAwesomeIcon>
        </div>
        <div className="card-cart">
          <button>
            <img src="../../../images/bx-cart.svg" alt="Add to cart"></img>
          </button>
        </div>
        <div className="card-img">
          <img src={data.img} alt="" />
        </div>
        <div className="card-title">
          <p>{data.name}</p>
        </div>
        <div className="card-price">{data.price}$</div>
        <div className="card-action">
          <button className="buy">
            <Link to={`/products/detail/${data.typeProduct}/${data.id}`}>Buy Now</Link>
          </button>
          <button className="cart">Add Cart</button>
        </div>
      </div>
    )
}