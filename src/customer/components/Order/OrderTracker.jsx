import { Step, StepLabel, Stepper } from '@mui/material'
import React from 'react'

const steps = [ "Placed", "Order Confirmed", "Shipped", "Out for Delivery", "Deliverde"]

const OrderTracker = ({activeStep}) => {
  return (
    <div className='w-full mt-10'>

    <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label,index)=><Step key={index}>
            <StepLabel sx={{color:"#9155fd", fontSize:"44px"}}>{label}</StepLabel>
        </Step>)}
    </Stepper>
</div>

  )
}

export default OrderTracker