import React, { useEffect } from "react";
import "./Best.scss";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../src/redux/features/productSlice";
import Card from "../src/components/card/Card";
const Best = () => {
  const { products } = useSelector((state) => state.products);

  const sliceProducts = products.slice(0, 5);

  return (
    <div>
      <div className="container">
        <div className="title">
          <h1>Best Sellers</h1>
          <div className="xet"></div>
        </div>
        <div className="cards">
          {sliceProducts &&
            sliceProducts.map((product) => (
              <Card key={product._id} product={product} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Best;
