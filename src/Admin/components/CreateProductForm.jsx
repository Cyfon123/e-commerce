import React, { Fragment, useState } from 'react'
import { useDispatch } from 'react-redux';
import { createProduct } from '../../State/Product/Action';
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';

const initialSizes = [
  { name: "S", quantity: 0 },
  { name: "M", quantity: 0 },
  { name: "L", quantity: 0 }
]
const CreateProductForm = () => {

  const [productData, setProductData] = useState({ imageUrl: "", brand: "", title: "", color: "", discountedPrice: "", price: "", discountPercent: "", size: initialSizes, quantity: "", topLevelCategory: "", secondLevelCategory: "", thirdLevelCategory: "", description: "" });

  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt")

  const handleChangePrev = (e) => {
    const { name, value } = e.target;
    setProductData((prevState) => ({ ...prevState, [name]: value }));
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update the state with the new value
    setProductData((prevState) => {
      const updatedProductData = { ...prevState, [name]: value };

      // If either price or discountPercent changes, calculate the discountedPrice
      if (name === 'price' || name === 'discountPercent') {
        const { price, discountPercent } = updatedProductData;

        // Only calculate if both price and discountPercent are present
        if (price && discountPercent) {
          const discountedPrice = price - (price * discountPercent / 100);
          updatedProductData.discountedPrice = discountedPrice.toFixed(2); // Optional: Round to 2 decimal places
        }
      }

      return updatedProductData;
    });
  };

  const handleSizeChange = (e, index) => {
    const { name, value } = e.target;
    // name === "size_quantity" ? name - "quantity" : name = e.target.name;

    if (name === "size_quantity") {
      const sizes = [...productData.size];
      sizes[index].quantity = value;
      setProductData((prevState) => ({ ...prevState, size: sizes }));
    } else {
      const sizes = [...productData.size];
      sizes[index][name] = value;
      setProductData((prevState) => ({ ...prevState, size: sizes }));
    }
   
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProduct({ productData }));
    console.log(productData);
  }



  return (
    <Fragment className='createProductContainer'>
      <Typography variant='h3' sx={{ textAlign: 'center', marginTop:'10px' }} className='py-19 text-center'>Add new Product</Typography>

      <form onSubmit={handleSubmit} className='createProductContainer min-h-screen mt-5 px-10' >
        <Grid container spacing={2}>

          <Grid item xs={12}>
            <TextField fullWidth label='Image URL' name='imageUrl' value={productData.imageUrl} onChange={handleChange} />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField fullWidth label='Brand' name='brand' value={productData.brand} onChange={handleChange} />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField fullWidth label='Title' name='title' value={productData.title} onChange={handleChange} />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField fullWidth label='Color' name='color' value={productData.color} onChange={handleChange} />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField fullWidth label='Quantity' name='quantity' value={productData.quantity} onChange={handleChange} />
          </Grid>

          <Grid item xs={12} md={4} sm={6}>
            <TextField fullWidth label='Price' name='price' value={productData.price} onChange={handleChange} type='number' />
          </Grid>

          <Grid item xs={12} md={4} sm={6}>
            <TextField fullWidth label='Discounted Price' name='discountedPrice' value={productData.discountedPrice} onChange={handleChange} type='number' />
          </Grid>

          <Grid item xs={12} md={4} sm={6}>
            <TextField fullWidth label='Discount Percent' name='discountPercent' value={productData.discountPercent} onChange={handleChange} type='number' />
          </Grid>

          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Top Level Category</InputLabel>
              <Select name='topLevelCategory' label='Top Level Category' value={productData.topLevelCategory} onChange={handleChange}>
                <MenuItem value="men">Men</MenuItem>
                <MenuItem value="women">Women</MenuItem>
                <MenuItem value="kids">Kids</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Second Level Category</InputLabel>
              <Select name='secondLevelCategory' label='Second Level Category' value={productData.secondLevelCategory} onChange={handleChange}>
                <MenuItem value="clothing">Clothing</MenuItem>
                <MenuItem value="accessories">Accessories</MenuItem>
                <MenuItem value="brands">Brands</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Third Level Category</InputLabel>
              <Select name='thirdLevelCategory' label='Third Level Category' value={productData.thirdLevelCategory} onChange={handleChange}>
                <MenuItem value="top">Tops</MenuItem>
                <MenuItem value="women_dress">Women Dresses</MenuItem>
                <MenuItem value="t-shirts">T-shirts</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <TextField fullWidth id='outlined-multiline-static' label='Desciption' multiline name='description' rows={3} value={productData.description} onChange={handleChange} />
          </Grid>

          {productData.size.map((size, index) => (
            <Grid container item spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField label='Size Name' name='name'  value={size.name} onChange={(event)=>handleSizeChange(event,index)} required fullWidth />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField label='Quantity' name='size_quantity' type='number'  value={size.quantity} onChange={(event)=>handleSizeChange(event,index)} required fullWidth />
              </Grid>
            </Grid>
          ))}

          <Grid item xs={12}>
            <Button variant='contained' sx={{p:1.8}} className='py-20' size='large' type='submit'>Add New Product</Button>
          </Grid>

        </Grid>
      </form>
    </Fragment>
  )
}

export default CreateProductForm