import React from 'react'
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, deleteProduct } from '../../redux/features/productSlice';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useFormik } from 'formik';
import { adminschema } from '../../formik/Formik';
const Admin = () => {
  const dispatch = useDispatch()
  const { products } = useSelector((state) => state.products)
  console.log(products);
  const deleteAdmin = (id) => {
    dispatch(deleteProduct(id))
  }

  const submitForm = (values) => {
    // Dispatch the addProduct action to add the new product
    dispatch(addProduct(values));

resetForm()
  };  

  const {values, handleSubmit, handleChange, errors, resetForm} = useFormik({
    initialValues: {
      name: '',
      price: '',
      category: '',
      image: '',
    },
    onSubmit: submitForm,
    validationSchema: adminschema,
  });


  return (
    <>
<form action="" onSubmit={handleSubmit}>
      
<div className="image">
        <label htmlFor="image">Image</label>
        <input type="text" id="image" name="image" 
          onChange={handleChange}
          value={values.image}
          />
          {errors.image && <span className="errors">{errors.image}</span>}
      </div>

      <div className="name">
        <label htmlFor="name">name</label>
        <input type="text" id="name" name="name" 
          onChange={handleChange}
          value={values.name}
          />
      </div>

      <div className="category">
        <label htmlFor="category">category</label>
        <input type="text" id="category" name="category" 
          onChange={handleChange}
          value={values.category}/>

      </div>

      <div className="price">
        <label htmlFor="price">price</label>
        <input type="number" id="price" name="price" 
          onChange={handleChange}
          value={values.price}
          />
      </div>

      <button type="submit" className="login-btn">submit</button>
</form>

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>image</th>
            <th> Name</th>
            <th>category</th>
            <th>price</th>
            <th>delete</th>
          </tr>
        </thead>  
        <tbody>
          {
            products.map((product) => (
              <tr key={product._id}>
                <td><img src={product?.image} alt="" /></td>
                <td>{product?.name}</td>
                <td>{product?.category}</td>
                <td>{product?.price}</td>
                <td><button onClick={() => deleteAdmin(product?._id)}>Delete</button></td>
              </tr>
            ))
          }

        </tbody>
      </Table>
    </>
  );
}

export default Admin
