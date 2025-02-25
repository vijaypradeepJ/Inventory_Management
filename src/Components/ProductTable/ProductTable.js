import React,{useState} from 'react'
import { TableContainer,TableBody,TableCell,TableHead,TableRow,Paper,Table} from '@mui/material'
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import "./ProductAction.css"
import ProductModal from '../ProductModal/ProductModal'

function ProductTable({ProductData,setProductData,isModalOpen,setIsModalOpen}) {
  const[SearchItem,setSearchItem]=useState("")
  const[selectProduct,setSelectProduct]=useState([])
  
     const handleAddItem=()=>{
      setIsModalOpen(true);
     }
     const handleEdit=(id)=>{
      const editProduct= ProductData.find((item)=> item.id===id)
      setSelectProduct(editProduct);
     }
  return (
    <>
    <div className='Search'>
        <TextField id="outlined-search" label="Search field" type="search" value={SearchItem} onChange={(e)=>setSearchItem(e.target.value)}  size='medium' color='#574964' />        
        <Button variant='contained' size='small' onClick={handleAddItem} >Add Product</Button>
        </div>
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
            ProductData
              .filter((item)=>{
                return SearchItem.toLowerCase() === " " 
                ? item
                : item.Name.toLowerCase().includes(SearchItem) ||
                  item.category.toLowerCase().includes(SearchItem); 
              })
            .map(({id,Name,category,pur_price,sales_price})=>
              (
              <TableRow
              key={id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{id}</TableCell>
              <TableCell component="th" scope="row">{Name}</TableCell>
              <TableCell align="right">{category}</TableCell>
              <TableCell align="right">{pur_price}</TableCell>
              <TableCell align="right">{sales_price}</TableCell>
              <TableCell align="right"><Button onClick={()=>handleEdit(id)}>edit</Button></TableCell>
              <TableCell align="right" > <Button>delete</Button></TableCell>
            </TableRow>


            ))
          }
          
           
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    {
        isModalOpen &&
        <ProductModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} ProductData={ProductData} setProductData={setProductData} selectProduct={selectProduct}/>
      }
    </>
  )
}

export default ProductTable;