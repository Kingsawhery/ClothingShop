import React, { useState } from "react";

const ProductDetailModal = ({ product }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  console.log(product);
  return (
    <div
      className="modal"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="modal-content" style={{ width: "300px" }}>
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <h2>Chi tiết sản phẩm</h2>
        <p>Tên sản phẩm: </p>
        <p>Giá: </p>
        <p>Mô tả:</p>
      </div>
    </div>
  );
};

export default ProductDetailModal;
