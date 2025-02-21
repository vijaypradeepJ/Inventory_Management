import React, { useEffect} from 'react'
import { TableContainer,TableBody,TableCell,TableHead,TableRow,Paper,Table} from '@mui/material'
import axios from "axios";

function ProductTable() {
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
          
            <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">1</TableCell>
            <TableCell component="th" scope="row">apple</TableCell>
            <TableCell align="right">Fruits</TableCell>
            <TableCell align="right">20</TableCell>
            <TableCell align="right">35</TableCell>
            <TableCell align="right">edit</TableCell>
            <TableCell align="right">delete</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default ProductTable;