import React, { useState } from 'react'
import SupplierTable from '../Components/SupplierTable/SupplierTable'


function Supliers() {
  const[isModalOpen,setIsModalOpen]=useState(false)
  const[supplierData,setSupplierData]=useState([
    {
      id:1,
      Name:"vijay",
      phone:456789,
      email:"prdee@gmail.com",
      Address:"cbe"
    },
    {
        id:2,
        Name:"vijay",
        phone:456789,
        email:"prdee@gmail.com",
        Address:"cbe"
      
    },
    {
      id:3,
      Name:"vijay",
      phone:456789,
      email:"prdee@gmail.com",
      Address:"cbe"
    },
    {
      id:4,
      Name:"vijay",
      phone:456789,
      email:"prdee@gmail.com",
      Address:"cbe"
    }
    
  ])
  return (
    <div>
      <SupplierTable isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}supplierData={supplierData} setSupplierData={setSupplierData}/>
      
    </div>
  )
}

export default Supliers