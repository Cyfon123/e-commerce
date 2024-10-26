import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';

const OrderCard = () => {
  return (
    <div className='p-5 m-5 shadow-lg hover:shadow-2xl border'>
        <Grid container spacing={2} sx={{justifyContent:'space-between'}}>

            <Grid item xs={6}>

                <div className='flex cursor-pointer'>

                    <img className='w-[5rem] h-[5rem] object-cover object-top' src='https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70' alt='image of Your Orders'/>
                    
                    <div className='ml-5 space-y-2'>

                        <p className=''> Men Slim Mid RIjn</p>
                        <p className='opacity-50 text-xs font-semibold'>Size: M</p>
                        <p className='opacity-50 text-xs font-semibold'>Color: Blue</p>

                    </div>

                </div>
            </Grid>

            <Grid item xs={4}>
                
                {true && <div><p>
                    <AdjustIcon sx={{width:"15px",height:"15px"}} className='text-green-600 mr-2 text-sm'/>
                    <span>Delivered Today</span>
                    </p>
                    <p className='text-xs'>Your Item has been deliverd</p>
                    </div>}
                {false && <p><AdjustIcon/><span>Expected Delivery on Tomorrow</span></p>}
    
            </Grid>
        </Grid>
    </div>
  )
}

export default OrderCard