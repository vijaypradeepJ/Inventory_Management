import React, { useState } from 'react'
import CustomerTable from '../Components/CustomerTable/CustomerTable';
import CustomerModal from '../Components/CustomerModal/CustomerModal';

function Customer() {
  const[isModalOpen,setIsModalOpen]=useState(false);
  const[CustomerData,setCustomerData]=useState([
    {
      id:1,
      Name:"Vijay",
      Phone:9342496489,
      Email:"pradeep@gmail.com"
    }
  ]);
  return (
    <div>
      <CustomerTable CustomerData={CustomerData} setCustomerData={setCustomerData} isModalOpen={isModalOpen} setisModalOpen={setIsModalOpen}/>
      {
        isModalOpen && 
        <CustomerModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} CustomerData={CustomerData} setCustomerData={setCustomerData} />
      }

    </div>
  )
}

export default Customer