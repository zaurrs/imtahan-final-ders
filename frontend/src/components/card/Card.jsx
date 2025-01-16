import React, { useEffect, useState } from "react";
import "./Card.scss";
import { useDispatch, useSelector } from "react-redux";
import { addBasket } from "../../redux/features/basketSlice";


const Card = ({ product }) => {
  const dispatch = useDispatch()



  const [heart, setHeart] = useState(false);
  const toggleHeart = () => {
    setHeart(!heart);
  };
  
const addToBasket = (e, product)=>{
dispatch(addBasket(product))
}
  return (
    <>
      <div className="card" key={product._id}>
        <div className="heart">
          {heart ? (
            <i
              style={{ color: "red" }}
              className="fa-solid fa-heart"
              onClick={() => {
                toggleHeart();
              }}
            ></i>
          ) : (
            <i
              className="fa-regular fa-heart"
              onClick={() => {
                toggleHeart();
              }}
            ></i>
          )}
        </div>
        <img src={product?.image} alt="" />
        <div className="card-container">
          <h5>{product?.name}</h5>
          <p className="price">${product?.price}</p>
          <button onClick={(e)=>{
addToBasket(e, product)
          }}>Add to cart</button>
        </div>
      </div>
    </>
  );
};

export default Card;
