import React,{useState} from 'react'
import { TableContainer,TableBody,TableCell,TableHead,TableRow,Paper,Table} from '@mui/material'
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import "../PurchaseModal/Purcahse.css";
import PurchaseModal from '../PurchaseModal/PurchaseModal';

function PurchaseTable({isModalOpen,setIsModalOpen}) {
  const[TableData,setTableData]=useState([]);
  const handleTableData=(newData)=>{
    setTableData([...TableData,{id:TableData.length+1,...newData}]);

  }
    const handleAddNew=()=>{
        setIsModalOpen(true);
    }
  return (
    <>
     <div className='Search'>
        <TextField id="outlined-search" label="Search field" type="search"   size='medium' color='#574964' />        
        <Button variant='contained' size='small' onClick={handleAddNew}  >Add New</Button>
        </div>
    <div style={{marginTop:"2rem",marginRight:"3rem"}}>
      <TableContainer component={Paper} elevation={8}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>S.no</TableCell>
            <TableCell >Supplier</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Total Amount</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
            {TableData.map((data)=>(
              <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{data.id}</TableCell>
              <TableCell component="th" scope="row">{data.supplier}</TableCell>
              <TableCell align="right">{data.date}</TableCell>
              <TableCell align="right">{data.total}</TableCell>
              <TableCell align="right"><Button >edit</Button></TableCell>
              <TableCell align="right" > <Button>delete</Button></TableCell>
            </TableRow>
              

            ))}
          
         
           
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    {
        isModalOpen &&
        <PurchaseModal sendTableData={handleTableData} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
    }
    </>
  )
}

export default PurchaseTable