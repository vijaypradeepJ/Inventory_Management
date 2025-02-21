import React from 'react'
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import "./ProductAction.css"
function ProductAction({isProductModal,setIsProductModal}) {
   const handleAddItem=()=>{
    setIsProductModal(true);
   }
  return (
    <>
     <div className='Search'>
        <TextField id="outlined-search" label="Search field" type="search" size='medium' color='#574964' />        
        <Button variant='contained' size='small' onClick={()=>handleAddItem({setIsProductModal})} >Add Product</Button>
        </div>

        <div>

        </div>
    </>
   
  )
}

export default ProductAction;