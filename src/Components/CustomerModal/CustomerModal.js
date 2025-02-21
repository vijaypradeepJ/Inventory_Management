import React,{useState} from 'react'
import "./CustomerModal.css";
import{Box, Button, Grid2, Paper, TextField, Typography} from "@mui/material";

function CustomerModal({CustomerData,setCustomerData,setIsModalOpen,isModalOpen}) {
  const[CustomerName,setCustomerName]=useState("");
    const[PhoneNo,setPhoneNo]=useState()
    const[Email,setEmail]=useState("");
    const handleCancelModal=()=>{
      setIsModalOpen(false);
  
    } 
    const handleAddCustomer=()=>{
      setCustomerData([...CustomerData,{
        id:CustomerData.length +1,
        Name:CustomerName,
        Phone:PhoneNo,
        Email:Email
      }])
      setCustomerName("")
      setPhoneNo()
      setEmail("")
      setIsModalOpen(false);
    }
  return (
    <Box component={Paper} elevation={10}  className='modaloverlay'>
            <Grid2 container rowSpacing={4} columnSpacing={2} alignContent={'center'} alignItems={"center"}>
                <Grid2 size={12} py={4} sx={{backgroundColor:"pink"}}>
                    <Typography align='center'>Customer</Typography>
    
                </Grid2>
            <Grid2 size={12} textAlign={'center'}  mt={1}>
            <TextField id="standard-basic" label="Customer Name" variant="standard" value={CustomerName} onChange={e=>setCustomerName(e.target.value)}  />
            </Grid2>
            <Grid2 size={6} textAlign={'center'}  mt={1}>
            <TextField id="standard-basic" label="Phone" variant="standard" value={PhoneNo} onChange={e=>setPhoneNo(e.target.value)}  />
            </Grid2>
            <Grid2 size={6} textAlign={'center'}  mt={1}>
            <TextField id="standard-basic" label="Email" variant="standard" value={Email} onChange={e=>setEmail(e.target.value)}  />
            </Grid2>
            <Grid2  size={8} px={10} mt={5} >
            <Button  variant='contained' color='success' onClick={handleAddCustomer} >Add Customer</Button>
            </Grid2>
            <Grid2 size={4} mt={5}>
            <Button variant='contained' color='error' onClick={handleCancelModal} >Cancel</Button>
            </Grid2>
            </Grid2>
        </Box>
  )
}

export default CustomerModal