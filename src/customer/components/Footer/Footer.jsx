import { Button, Grid } from '@mui/material'; // Import Grid from Material-UI
import { Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <Grid 
        container 
        className='bg-black text-white text-center mt-10'
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
         <Grid item xs={12} sm={6} md={3}>
          <Typography className='pb-5' variant='h6'>Company</Typography>
          <div>
            <Button className='pb-5 text-white' variant='text'>About</Button>
          </div>
          <div>
            <Button className='pb-5' variant='text'>Blog</Button>
          </div>
          <div>
            <Button className='pb-5' variant='text'>Press</Button>
          </div>
          <div>
            <Button className='pb-5' variant='text'>Jobs</Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className='pb-5' variant='h6'>Solutions</Typography>
          <div>
            <Button className='pb-5' variant='text'>Analytics</Button>
          </div>
          <div>
            <Button className='pb-5' variant='text'>Commerce</Button>
          </div>
          <div>
            <Button className='pb-5' variant='text'>Insights</Button>
          </div>
          <div>
            <Button className='pb-5' variant='text'>Supports</Button>
          </div>
        </Grid>

       

        <Grid item xs={12} sm={6} md={3}>
          <Typography className='pb-5' variant='h6'>Documentaion</Typography>
          <div>
            <Button className='pb-5' variant='text'>Guides</Button>
          </div>
          <div>
            <Button className='pb-5' variant='text'>Api Status</Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className='pb-5' variant='h6'>Documentation</Typography>
          <div>
            <Button className='pb-5' variant='text'>Api Guides</Button>
          </div>
          <div>
            <Button className='pb-5' variant='text'>Link 2</Button>
          </div>
          <div>
            <Button className='pb-5' variant='text'>Link 3</Button>
          </div>
          <div>
            <Button className='pb-5' variant='text'>Link 4</Button>
          </div>
        </Grid >

        <Grid className='pt-20' item xs={12}>
        <Typography  variant='body2' component="p" align='center'>
            &copy; 2025 My Company. All rights preserved.
        </Typography>

        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;