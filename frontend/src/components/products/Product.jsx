import React, { useEffect } from "react";
import "./Product.scss";
import Card from "../card/Card";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../redux/features/productSlice";
const Product = () => {
  const { products } = useSelector((state) => state.products);

  return (
    <div>
      <div className="container">
        <div className="title">
          <h1>New Arrivals</h1>
          <div className="xet"></div>
          <div className="category-button">
            <button style={{ backgroundColor: "red", color: "white" }}>
              ALL
            </button>
            <button>WOMENS</button>
            <button>ACCSORIES</button>
            <button>MENS</button>
          </div>
        </div>
        <div className="cards">
          {products.map((product) => 
            <Card key={product._id} product={product} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
