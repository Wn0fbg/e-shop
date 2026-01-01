import React from "react";
import arrow_icon from "../assets/breadcrum_arrow.png";

const Breadcrums = (props) => {
  const { product } = props;

  return (
    <div className="breadcrum">
      <p>
        Home <img src={arrow_icon} alt="" />{" "}
      </p>
      <p>
        Shop <img src={arrow_icon} alt="" />
      </p>
      <p>
        {product.category} <img src={arrow_icon} alt="" />
      </p>
      <p>{product.name}</p>
    </div>
  );
};

export default Breadcrums;
