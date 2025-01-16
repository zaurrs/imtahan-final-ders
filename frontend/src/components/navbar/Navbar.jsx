import React from 'react'
import { Link } from 'react-router-dom'
import { FaBasketShopping } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import "./Navbar.scss"
import { useSelector } from 'react-redux';
const Navbar = () => {
  const {basket} = useSelector((state)=>state.basket)
  const totalSup = basket.reduce((acc, item)=> acc + item.count, 0)
  return (
    <div>
      <div className="container">
        <div className="nav">
            <div className="logo">
              <h1>COLO</h1>
              <h1 className='redlogo'>SHOP</h1>
            </div>
     
        <ul className="list">
            <li><Link to="/">Home</Link> </li>
            <li><Link to="/admin">Admin</Link> </li>
            
        </ul>
        <div className="wrapper">

<div className="basket">
<Link to='/basket'>  <FaBasketShopping />   </Link>
<sup>{totalSup}</sup>
</div>
<Link to="/wishlist"> <CiHeart/> </Link>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Navbar
