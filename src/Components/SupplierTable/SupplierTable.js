import React ,{useState}from 'react'
import { TableContainer,TableBody,TableCell,TableHead,TableRow,Paper,Table} from '@mui/material'
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import "./SupplierTable.css"
import { MdDelete ,MdEdit} from "react-icons/md";
import SupplierModal from '../SupplierModal/SupplierModal'

function SupplierTable({setIsModalOpen,isModalOpen,supplierData,setSupplierData}) {
     const[search,setsearch]=useState("")
      const handleAddSupplier=()=>{
        setIsModalOpen(true);
      }
      const handleDelete=(id)=>{
         const deleteData=supplierData.filter(((data)=>data.id !== id))
         setSupplierData(deleteData);
  return (
    <>
         <div className='Search'>
        <TextField id="outlined-search" label="Search field" type="search" value={search} onChange={e=>setsearch(e.target.value)} size='medium' color='#574964' />        
        <Button variant='contained' size='small' onClick={handleAddSupplier} >Add Supplier</Button>
        </div>

        
     <div style={{marginTop:"2rem",marginRight:"3rem"}}>
          <TableContainer component={Paper} elevation={8}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>S.no</TableCell>
                <TableCell >Name</TableCell>
                <TableCell align="right">Phone</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Address</TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                supplierData
                .filter((customer)=>{
                   return search.toLowerCase() === "" 
                  ? customer
                  : customer.Name.toLowerCase().includes(search)
                })
                .map(({id,Name,phone,email,Address})=>(
                  <TableRow
                  key={id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">{id}</TableCell>
                  <TableCell component="th" scope="row">{Name}</TableCell>
                  <TableCell align="right">{phone}</TableCell>
                  <TableCell align="right">{email}</TableCell>
                  <TableCell align="right">{Address}</TableCell>
                  <TableCell align="right" ><Button ><MdEdit  style={{ fontSize:"large", color:"Blue" } }/></Button></TableCell>
                  <TableCell align="right"><Button onClick={()=>handleDelete(id)}><MdDelete style={{fontSize:"large",color:"red"}}/></Button></TableCell>
                </TableRow>
    
    
                ))
              }
              
               
            </TableBody>
          </Table>
        </TableContainer>
        {
        isModalOpen &&
        <SupplierModal isModalOpen={setIsModalOpen} setIsModalOpen={setIsModalOpen}
         supplierData={supplierData} setSupplierData={setSupplierData} 
         />
      }
        </div>
    </>

  )
}
}

export default SupplierTable;