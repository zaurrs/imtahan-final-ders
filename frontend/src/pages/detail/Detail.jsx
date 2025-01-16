import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getProduct } from '../../redux/features/productSlice';

const Detail = () => {
    const { id } = useParams()
    console.log(id);
const dispatch = useDispatch()
    const {products} = useSelector((state)=>state.products)
    console.log(products);

    const [findProduct, setFindProduct] = useState(null)

    useEffect(()=>{
        dispatch(getProduct())
    }, [dispatch])
useEffect(()=>{
    if(products.length> 0) {
        const product = products.find((item) => item._id.toString() === id);

        setFindProduct(product)
    }
}, [products, id])
    return (
        <div>
            <h1>Detail Page</h1>
            <img src={findProduct?.image} alt="" />
            </div>
    )
}

export default Detail