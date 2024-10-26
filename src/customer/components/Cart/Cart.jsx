import React from 'react'
import CartItem from './CartItem'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const navigate = useNavigate();
    const handleCheckout =()=>{navigate("/checkout?step=2")}
    return (
        <div className='lg:grid grid-cols-3 lg:px-16 relative'>

            <div className='col-span-2'>
                {[1,1,1].map((item)=><CartItem />)}
                
            </div>

            <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
                <div className='border'>
                    <p className='uppercase text-center  font-bold opacity-60 pb-4'>Price Details</p>
                    <hr />
                    <div className='space-y-3 px-5 font-semibold'>
                        <div className='flex justify-between pt-3 text-black'>
                            <span>Price</span>
                            <span>Rs5000</span>
                        </div>
                        <div className='flex justify-between pt-3 '>
                            <span>Discount</span>
                            <span className='text-green-600 font-semibold'>-Rs5000</span>
                        </div>
                        <div className='flex justify-between pt-3 '>
                            <span>Delivery Charge</span>
                            <span className='text-green-600 font-semibold'>Free</span>
                        </div>
                        <div className='flex justify-between pt-3 '>
                            <span>Total Amount</span>
                            <span className='text-green-600 font-semibold'>Rs7500</span>
                        </div>



                        <Button onClick={handleCheckout} variant='contained' className='w-full mx-20 ' sx={{px:"2.5rem",py:".7rem",bgcolor:"#9155fd"}}>Checkout</Button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Cart