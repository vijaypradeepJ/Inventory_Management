import React, { useState } from 'react'
import ProductTable from '../Components/ProductTable/ProductTable'
import ProductAction from '../Components/ProductAction/ProductAction'

function Product() {
  const[isProductModal,setIsProductModal]=useState(false)
    return (
    <div>
      <ProductAction isProductModal={isProductModal} setProductModal={setIsProductModal}/>
      <ProductTable/>
    </div>
  )
}

export default Product