import React, { useState } from 'react'
import ProductTable from '../Components/ProductTable/ProductTable'

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
    },
    {
      id:2,
      Name:"Mango",
      category:"fruits",
      pur_price:20,
      sales_price:40
    },
    {
      id:3,
      Name:"papaya",
      category:"fruits",
      pur_price:20,
      sales_price:40
    },
    {
      id:4,
      Name:"potato",
      category:"fruits",
      pur_price:20,
      sales_price:40
    }
  ]);
    return (
    <div>
      <ProductTable ProductData={ProductData} setProductData={setProductData} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
      {
        isModalOpen &&
        <ProductModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} ProductData={ProductData} setProductData={setProductData}/>
      }
    </div>
  )
}

export default Product