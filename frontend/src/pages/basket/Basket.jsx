import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Table from 'react-bootstrap/Table';
import "./Basket.scss"
import { deleteBasket } from '../../redux/features/basketSlice';
const Basket = () => {
  const dispatch = useDispatch()
  const {basket} = useSelector((state)=>state.basket)
  console.log(basket);

  const deleteToBasket =(product)=>{
    dispatch(deleteBasket(product))
  }
  
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
            <td>${product.price}</td>
            <td>{product.count}</td>
            <td className='settings'><button>+</button>
            <p>0</p>
            <button>-</button></td>
            <td><button onClick={()=>{deleteToBasket(product)}}>Delete</button></td>

          </tr>
          ))
        }
       
      </tbody>
    </Table>
  );

}

export default Basket
