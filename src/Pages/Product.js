import React, { useState } from 'react'
import ProductTable from '../Components/ProductTable/ProductTable'
import ProductAction from '../Components/ProductAction/ProductAction'
import ProductModal from '../Components/ProductModal/ProductModal'

function Product() {
  const[isModalOpen,setIsModalOpen]=useState(false);
  const[ProductData,setProductData]=useState([
    {
      id:1,
      Name:"apple",
      category:"fruits",
      pur_price:20,
      sales_price:40
    }
  ]);
    return (
    <div>
      <ProductAction isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
      <ProductTable ProductData={ProductData} setProductData={setProductData}/>
      {
        isModalOpen &&
        <ProductModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} ProductData={ProductData} setProductData={setProductData}/>
      }
    </div>
  )
}

export default Product