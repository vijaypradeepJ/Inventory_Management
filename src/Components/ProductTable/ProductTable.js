import React from 'react'
import { TableContainer,TableBody,TableCell,TableHead,TableRow,Paper,Table} from '@mui/material'

function ProductTable({ProductData,setProductData}) {
  return (
    <div style={{marginTop:"2rem",marginRight:"3rem"}}>
      <TableContainer component={Paper} elevation={8}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>S.no</TableCell>
            <TableCell >Name</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Pur Price</TableCell>
            <TableCell align="right">Sales Price</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            ProductData.map(({id,Name,category,pur_price,sales_price})=>(
              <TableRow
              key={id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{id}</TableCell>
              <TableCell component="th" scope="row">{Name}</TableCell>
              <TableCell align="right">{category}</TableCell>
              <TableCell align="right">{pur_price}</TableCell>
              <TableCell align="right">{sales_price}</TableCell>
              <TableCell align="right">edit</TableCell>
              <TableCell align="right">delete</TableCell>
            </TableRow>


            ))
          }
          
           
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default ProductTable;