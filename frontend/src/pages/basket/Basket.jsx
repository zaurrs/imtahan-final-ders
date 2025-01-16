import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Table from 'react-bootstrap/Table';
import "./Basket.scss"
import { deleteBasket, minusBtn, plusBtn } from '../../redux/features/basketSlice';
const Basket = () => {
  const dispatch = useDispatch()
  const {basket} = useSelector((state)=>state.basket)
  console.log(basket);

  const deleteToBasket =(product)=>{
    dispatch(deleteBasket(product))
  }
  const plustoBtn =(product)=>{
    dispatch(plusBtn(product))
  }

  const minustoBtn =(product)=>{
    dispatch(minusBtn(product))
  }
  const totalPrice = basket.reduce((acc, item)=> acc + item.count*item.price, 0)
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>image</th>
          <th> Name</th>
          <th>Price</th>
          <th>Count</th>
          <th>Settings</th>
          <th>delete product</th>
        </tr>
      </thead>
      <tbody>
        {
          basket.map((product)=>(
            <tr key={product._id}>
            <td ><img className='img' src={product.image} alt="" /></td>
            <td>{product.name}</td>
            <td>${product.price * product.count}</td>
            <td>{product.count}</td>
            <td className='settings' ><button onClick={()=>{plustoBtn(product)}}>+</button>
            <p>{product.count}</p>
            <button style={{padding:"0 10px"}} onClick={()=>{minustoBtn(product)}}>-</button></td>
            <td><button onClick={()=>{deleteToBasket(product)}}>Delete</button></td>

          </tr>
          ))
        }
       
      </tbody>
        <h3>{totalPrice}</h3>
      <div className="div">
      </div>
    </Table>
  );

}

export default Basket
