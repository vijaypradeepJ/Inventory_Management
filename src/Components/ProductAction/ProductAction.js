import React from 'react'
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import "./ProductAction.css"
function ProductAction({isModalOpen,setIsModalOpen}) {
   const handleAddItem=()=>{
    setIsModalOpen(true);
   }
  return (
    <>
     <div className='Search'>
        <TextField id="outlined-search" label="Search field" type="search" size='medium' color='#574964' />        
        <Button variant='contained' size='small' onClick={handleAddItem} >Add Product</Button>
        </div>

        <div>

        </div>
    </>
   
  )
}

export default ProductAction;