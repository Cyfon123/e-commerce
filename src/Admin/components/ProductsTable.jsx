import { Avatar, Button, Card, CardHeader, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct, findProducts } from '../../State/Product/Action';

const ProductsTable = () => {

  const dispatch = useDispatch();
  const { productStore } = useSelector(store => store)
  console.log("products:-", productStore.products)

  const handleProductDelete=(productId)=>{dispatch(deleteProduct(productId))}
  useEffect(() => {
    const data = {
      category: "mens_kurta",
      colors: [],
      sizes: [],
      minPrice: 0,
      maxPrice: 1000000,
      minDiscount: 0,
      sort: "price_low",
      pageNumber: 1,
      pageSize: 20,
      stock: "",
    };
    dispatch(findProducts(data));
  }, [productStore.deletedProduct])
  return (
    <div className='px-2'>
      <Card className='mt-2'  sx={{bgcolor:'black', color:'white'}}>
        <CardHeader title='All Products' />

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{backgroundColor: 'grey.400', fontWeight: 'bold'}}>
                <TableCell>S.No</TableCell>
                <TableCell align="left">Product</TableCell>
                <TableCell align="left">Title</TableCell>
                <TableCell align="left">Category</TableCell>
                <TableCell align="left">Discount Price</TableCell>
                <TableCell align="left">Quantity</TableCell>
                <TableCell align="left">Remove</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {productStore.products?.content?.map((item, index) => (
                <TableRow
                  key={item.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 },backgroundColor: 'grey.300','&:hover': {backgroundColor: 'grey.500'} }}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell align='left'>
                    <Avatar src={item.imageUrl}></Avatar>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {item.title}
                  </TableCell>
                  <TableCell align="left">{item.category.name}</TableCell>
                  <TableCell align="left">{item.discountPrice}</TableCell>
                  <TableCell align="left">{item.quantity}</TableCell>
                  <TableCell align="left">
                    <Button onClick={()=>handleProductDelete(item.id)} variant='outlined'>Delete</Button>
                  </TableCell>



                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
 
    </div>
  )
}

export default ProductsTable