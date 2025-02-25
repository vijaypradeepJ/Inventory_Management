import React from 'react'

function PurchaseModal() {
  return (
    <Box component={Paper} elevation={10}  className='modaloverlay'>
    <Grid2 container rowSpacing={4} columnSpacing={2} alignContent={'center'} alignItems={"center"}>
        <Grid2 size={12} py={4} sx={{backgroundColor:"pink"}}>
            <Typography align='center'>Product</Typography>

        </Grid2>
    <Grid2 size={6} textAlign={'center'}  mt={1}>
    <TextField id="standard-basic" label="Product Name" variant="standard" value={ProductName} onChange={e=>setProductName(e.target.value)}  />
    </Grid2>
    <Grid2 size={6} textAlign={'center'}  mt={1}>
    <TextField id="standard-basic" label="category" variant="standard" value={categoryType} onChange={e=>setCategoryType(e.target.value)}  />
    </Grid2>
    <Grid2 size={6} textAlign={'center'}  mt={1}>
    <TextField id="standard-basic" label="Purchase Price" variant="standard" value={purchasePrice} onChange={e=>setPurchasePrice(e.target.value)}  />
    </Grid2>
    <Grid2 size={6} textAlign={'center'}  mt={1}>
    <TextField id="standard-basic" label="Sales Price" variant="standard" value={salesPrice} onChange={e=>setSalesPrice(e.target.value)}  />
    </Grid2>
    <Grid2  size={8} px={10} mt={5} >
    <Button  variant='contained' color='success' onClick={handleAddProduct} >Add Item</Button>
    </Grid2>
    <Grid2 size={4} mt={5}>
    <Button variant='contained' color='error' onClick={handleCancelModal} >Cancel</Button>
    </Grid2>
    </Grid2>
</Box>
    
  )
}

export default PurchaseModal