import React ,{useEffect, useState}from 'react'
import "./SupplierModal.css"
import{Box, Button, Grid2, Paper, TextField, Typography} from "@mui/material";

function SupplierModal({setIsModalOpen,isModalOpen,supplierData,setSupplierData}) {
    const[SupplierName,setSupplierName]=useState("");
        const[PhoneNo,setPhoneNo]=useState()
        const[Email,setEmail]=useState("");
        const[Adress,setAdress]=useState("")
        const handleCancelModal=()=>{
          setIsModalOpen(false);
      
        } 
        const handleAddSupplier=()=>{
          setSupplierData([...supplierData,{
            id:supplierData.length +1,
            Name:SupplierName,
            phone:PhoneNo,
            email:Email,
            Adress:Adress
          }])
          setSupplierName("")
          setPhoneNo()
          setEmail("")
          setAdress("")
          setIsModalOpen(false);
        }
         
           

        
  return (
    <Box component={Paper} elevation={10}  className='modaloverlay'>
    <Grid2 container rowSpacing={4} columnSpacing={2} alignContent={'center'} alignItems={"center"}>
        <Grid2 size={12} py={4} sx={{backgroundColor:"pink"}}>
            <Typography align='center'>Customer</Typography>

        </Grid2>
    <Grid2 size={6} textAlign={'center'}  mt={1}>
    <TextField id="standard-basic" label="Customer Name" variant="standard" value={SupplierName} onChange={e=>setSupplierName(e.target.value)}  />
    </Grid2>
    <Grid2 size={6} textAlign={'center'}  mt={1}>
    <TextField id="standard-basic" label="Phone" variant="standard" value={PhoneNo} onChange={e=>setPhoneNo(e.target.value)}  />
    </Grid2>
    <Grid2 size={6} textAlign={'center'}  mt={1}>
    <TextField id="standard-basic" label="Email" variant="standard" value={Email} onChange={e=>setEmail(e.target.value)}  />
    </Grid2>
    <Grid2 size={6} textAlign={'center'}  mt={1}>
    <TextField id="standard-basic" label="Address" variant="standard" value={Adress} onChange={e=>setAdress(e.target.value)}  />
    </Grid2>
    <Grid2  size={8} px={10} mt={5} >
    <Button  variant='contained' color='success' onClick={handleAddSupplier} >Add Customer</Button>
    </Grid2>
    <Grid2 size={4} mt={5}>
    <Button variant='contained' color='error' onClick={handleCancelModal} >Cancel</Button>
    </Grid2>
    </Grid2>
</Box>
  )
}

export default SupplierModal;