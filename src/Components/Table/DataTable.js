import React, { useEffect, useState} from 'react'
import { TableContainer,TableBody,TableCell,TableHead,TableRow,Paper,Table} from '@mui/material'
import axios from "axios";
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import "./ItemAction.css"

function DataTable({categoryData,setCategoryData,isModalOpen,setIsModalOpen}) {
  const[search,setSearch]=useState("");
  const handleAddItem=()=>{
    setIsModalOpen(true);
   }
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

  


  return (
    <>
    <div className='Search'>
        <TextField id="outlined-search" label="Search field" type="search" value={search} onChange={e=>setSearch(e.target.value)} size='medium' color='#574964' />        
        <Button variant='contained' size='small' onClick={handleAddItem} >Add Item</Button>
        </div>
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
          { categoryData
             .filter((item)=>{
               return search.toLowerCase() === ""
               ? item 
               : item.category.toLowerCase().includes(search);
             })
          
             .map(({id,category})=>(
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
    </>
  )
}

export default DataTable