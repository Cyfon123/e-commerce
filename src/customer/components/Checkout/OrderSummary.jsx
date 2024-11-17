import React, { useEffect } from 'react'
import AddressCard from '../AddressCard/AddressCard'
import CartItem from '../Cart/CartItem'
import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderById } from '../../../State/Order/Action'
import { useLocation } from 'react-router-dom'
import { createPayment } from '../../../State/Payment/Action'

const OrderSummary = () => {

    const dispatch = useDispatch();
    const location = useLocation();
    const {orderStore} = useSelector(store => store);
    const searchParams = new URLSearchParams(location.search);
    const orderId = searchParams.get("order_id");

    useEffect(() => {
        if (orderId) {
            dispatch(getOrderById(orderId));
        }
    }, [dispatch, orderId]);

    const handleCheckout = ()=> {
        dispatch(createPayment(orderId))
    }
    return (
        <div>

            <div className='p-5 shadow-current rounded-s-md border'>
                {console.log("Your shipping address is",orderStore.order?.shippingAddress)}
                <AddressCard address={orderStore.order?.shippingAddress}/>
            </div>

            <div className='lg:grid grid-cols-3 lg:px-16 relative'>

                 <div className='col-span-2'>
                    {orderStore.order?.orderItems.map((item) => <CartItem item ={item} />)}

                </div> 

                <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
                    <div className='border'>
                        <p className='uppercase text-center  font-bold opacity-60 pb-4'>Price Details</p>
                        <hr />
                        <div className='space-y-3 px-5 font-semibold'>
                            <div className='flex justify-between pt-3 text-black'>
                                <span>Price</span>
                                <span>{`Rs${orderStore.order?.totalPrice}`}</span>
                            </div>
                            <div className='flex justify-between pt-3 '>
                                <span>Discount</span>
                                <span className='text-green-600 font-semibold'>{`-Rs${orderStore.order?.discount}`}</span>
                            </div>
                            <div className='flex justify-between pt-3 '>
                                <span>Delivery Charge</span>
                                <span className='text-green-600 font-semibold'>Free</span>
                            </div>
                            <div className='flex justify-between pt-3 '>
                                <span>Total Amount</span>
                                <span className='text-green-600 font-semibold'>{`Rs${orderStore.order?.totalDiscountedPrice}`}</span>
                            </div>



                            <Button variant='contained' className='w-full mx-20 ' sx={{ px: "2.5rem", py: ".7rem", bgcolor: "#9155fd" }} onClick={handleCheckout}>Checkout</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderSummary