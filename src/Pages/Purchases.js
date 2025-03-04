import React, { useState } from 'react'
import PurchaseTable from '../Components/PurchaseTable/PurchaseTable'

function Purchases() {
  const[isModalOpen,setIsModalOpen]=useState(false)
  return (
    <div>
      <PurchaseTable isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
    </div>
  )
}

export default Purchases