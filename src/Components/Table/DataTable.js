import React, { useEffect} from 'react'
import { TableContainer,TableBody,TableCell,TableHead,TableRow,Paper,Table} from '@mui/material'
import axios from "axios";

function DataTable({categoryData,setCategoryData}) {
  console.table(categoryData);
  
  const pathToJsonFile="/data.json";
  useEffect(()=>{
    const fetchCategoryData=async()=>{
      try{
        const response=await axios.get(pathToJsonFile);
        setCategoryData(response.data);

      }
      catch(e){
        console.log("Error fetchin the data",e)
      }
    };
    fetchCategoryData();
  },[])

  // Add Data 


  return (
    <div style={{marginTop:"2rem",marginRight:"3rem"}}>
      <TableContainer component={Paper} elevation={8}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>S.no</TableCell>
            <TableCell >Category</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { categoryData.map(({id,category})=>(
            <TableRow
            key={id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">{id}</TableCell>
            <TableCell component="th" scope="row">{category}</TableCell>
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

export default DataTable