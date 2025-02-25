import React from 'react'
import { TableContainer,TableBody,TableCell,TableHead,TableRow,Paper,Table} from '@mui/material'
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import "../PurchaseModal/Purcahse.css";

function PurchaseTable() {
  return (
    <>
     <div className='Search'>
        <TextField id="outlined-search" label="Search field" type="search"   size='medium' color='#574964' />        
        <Button variant='contained' size='small'  >Add Product</Button>
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
         
              <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row"></TableCell>
              <TableCell component="th" scope="row"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"><Button >edit</Button></TableCell>
              <TableCell align="right" > <Button>delete</Button></TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </>
  )
}

export default PurchaseTable