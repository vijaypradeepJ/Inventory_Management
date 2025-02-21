import React ,{useState} from 'react'
import "./ItemModal.css"
import{Box, Button, Grid2, Paper, TextField, Typography} from "@mui/material";
function ItemModal({setIsModalOpen,categoryData,setCategoryData}) {
    const[Item,SetItem]=useState("")
    const handleAddItem= ()=>{
        setCategoryData([...categoryData,{
            id:categoryData.length +1 ,
            category:Item
        }])
        SetItem("")
        setIsModalOpen(false);
    }
    

    
  return (
    <Box component={Paper} elevation={10}  className='modaloverlay'>
        <Grid2 container rowSpacing={4} columnSpacing={2} alignContent={'center'} alignItems={"center"}>
            <Grid2 size={12} py={4} sx={{backgroundColor:"pink"}}>
                <Typography align='center'>Category</Typography>

            </Grid2>
        <Grid2 size={12} textAlign={'center'}  mt={1}>
        <TextField id="standard-basic" label="Add Category" variant="standard" value={Item} onChange={e=> SetItem(e.target.value)}   />

        </Grid2>
        <Grid2  size={8} px={10} >
        <Button  variant='contained' color='success' onClick={()=>handleAddItem({categoryData,setCategoryData})} >Add Item</Button>
        </Grid2>
        <Grid2 size={4}>
        <Button variant='contained' color='error' onClick={()=> setIsModalOpen(false)}>Cancel</Button>

        </Grid2>
        

        </Grid2>

       
       
        
      
        

        
       

     


    </Box>
  )
}

export default ItemModal