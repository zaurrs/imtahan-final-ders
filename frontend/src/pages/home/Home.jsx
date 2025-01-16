import React from 'react'
import Hero from '../../components/hero/Hero'
import Category from '../../components/category/Category'
import Product from '../../components/products/Product'
import Best from '../../../bestsellers/Best'

const Home = () => {
  return (
    <div>
      <Hero />
      <Category />
      <Product />
      <Best />
    </div>
  )
}

export default Home
