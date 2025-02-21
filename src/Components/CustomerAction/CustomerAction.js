import React from 'react'
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import "./CustomerAction.css"

function CustomerAction({setisModalOpen,isModalOpen}) {
  const handleAddCustomer=()=>{
    setisModalOpen(true);
  }
  return (
    <div>
      <div className='Search'>
        <TextField id="outlined-search" label="Search field" type="search" size='medium' color='#574964' />        
        <Button variant='contained' size='small' onClick={handleAddCustomer} >Add Item</Button>
        </div>

        <div>

        </div>
        </div>
   
    
  )
}

export default CustomerAction