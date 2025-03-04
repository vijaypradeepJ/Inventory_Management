import React, {  useState } from "react";
import "./Purcahse.css"
import laysyogurt from "../../assets/Images/laysyogurt.jpeg"
import laysmasala from "../../assets/Images/laysmasala.jpeg"
import layssalted from "../../assets/Images/layssalted.jpeg"
import galabiscuit from "../../assets/Images/gala biscuit.jpeg"
import pepsi from "../../assets/Images/pepsi.jpeg"
import spirte from "../../assets/Images/spirte.jpeg"
import nescafe from "../../assets/Images/nescafe.jpeg"
import fivestar from "../../assets/Images/fivestar.png"
import {
  Container,
  Card,
  CardContent,
  CardMedia,
  Typography,
  TextField,
  Button,
  Box,
  Grid2,
  Paper,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  MenuItem,
  Select
} from "@mui/material";
import useStore from "../store";


const products = [
  { name: "Lays Yogurt", price: 18 ,img:laysyogurt },
  { name: "Lays Masala", price: 55 , img:laysmasala },
  { name: "Lays Salted", price: 95,img:layssalted },
  { name: "Gala Biscuits", price: 28 ,img:galabiscuit},
  { name: "Pepsi Tin", price: 47,img:pepsi },
  { name: "Sprite Tin", price: 47,img:spirte },
  { name: "Nescafe", price: 35,img:nescafe },
  { name: "Fivestar", price: 15,img:fivestar }
];

const PurchaseModal = ({sendTableData,isModalOpen,setIsModalOpen}) => {
  const data=useStore((state)=>state.data)
  const [total, setTotal] = useState(0);
  const[Productsdetail,setProducts]=useState([])
  const[date,setDate]=useState("")
  const[supplier,setSupplier]=useState("")
  const[SearchItem,setSearchItem]=useState("")

  const handleSave=()=>{
    sendTableData({supplier,date,total})
    setIsModalOpen(false)
  }

  const handleClear=()=>{
    setTotal(0)
    setSupplier("")
    setDate("")
    setProducts([])
  }
 

  const addToCart = (product) => {
    setTotal(total + product.price);
    setProducts([...Productsdetail,product])

  };

  return (
    <Container className="lay" component={Paper} elevation={4}>
      <Grid2 container spacing={2}>
      <Grid2 size={8} mt={4}>
      <Box display="flex" justifyContent="space-between" my={2}>
        <TextField  variant="outlined" value={SearchItem} onChange={e=>setSearchItem(e.target.value)} size="small" />
        <TextField  type="date" value={date} onChange={e=>setDate(e.target.value)} variant="outlined" size="small" />
        <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        label="Customer" size="small" value={supplier}
        onChange={e=>setSupplier(e.target.value)}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {
          data.map((value)=>(
            <MenuItem value={value.Name}>{value.Name}</MenuItem>

          ))

        }
        
      </Select>
        <Button variant="contained" onClick={handleSave} color="primary" sx={{ mr: 1 }}>
          Save
        </Button>
        <Button variant="contained" onClick={handleClear} color="error">
          Clear
        </Button>
      </Box>

      <Grid2 container spacing={2}>
        {products
         .filter((item)=>{
          return SearchItem.toLowerCase() === " "
          ? item 
          : item.name.toLowerCase().includes(SearchItem);
         })
        .map((product, index) => (
          <Grid2 item  size={3} key={index}>
            <Card onClick={() => addToCart(product)} sx={{ cursor: "pointer" }}>
              <CardMedia
                component="img"
                height="100"
                image={product.img}
                alt={product.name}
                sx={{
                  width:130,
                  marginTop:2
                }}
              />
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography color="textSecondary">{product.price}</Typography>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>

      </Grid2>
      <Grid2 size={4}>
      <Box mt={3} p={2} bgcolor="lightgray">
        <Typography variant="h6">Grand Total</Typography>
        <TextField value={total}/>
        </Box>
        <Box p={2}>
        <TableContainer>
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell>qty</TableCell>
              <TableCell>price</TableCell>
              <TableCell>Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              Productsdetail.map((product)=>(
                <TableRow>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>1</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>{1*product.price}</TableCell>
                </TableRow>
              ))
            }

          </TableBody>

        </TableContainer>

        </Box>
        
        
     

      </Grid2>
      </Grid2>
     

     
    </Container>
  );
};

export default PurchaseModal;