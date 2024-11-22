import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOrderById } from "../../../State/Order/Action";
import { updatePayment } from "../../../State/Payment/Action";
import { Alert, AlertTitle, Grid } from "@mui/material";
import OrderTracker from "../Order/OrderTracker";
import AddressCard from "../AddressCard/AddressCard";

const PaymentSuccess = () => {
  const [paymentId, setPaymentId] = useState();
  const [referenceId, setReferenceId] = useState();
  const [paymentStatus, setPaymentStatus] = useState();
  const { orderId } = useParams();
  const dispatch = useDispatch();
  const { orderStore } = useSelector((store) => store);

  useEffect(() => {
    const urlParam = new URLSearchParams(window.location.search);
    setPaymentId(urlParam.get("razorpay_payment_id"));
    setReferenceId(urlParam.get("razorpay_payment_link_reference_id"));
    setPaymentStatus(urlParam.get("razorpay_payment_link_status"));
  }, []);

  useEffect(() => {
    if(paymentId) {
      const data = { orderId, paymentId };
      {console.log("payment id - :" + paymentId)}
      {console.log("order id - :" + orderId)}
      dispatch(getOrderById(orderId));
      dispatch(updatePayment(data));
    }
  }, [orderId, paymentId]);

  return (
    <div className="px-2 lg:px-36">
      <div className="flex flex-col justify-center items-center">
        <Alert
          variant="filled"
          severity="success"
          sx={{ md: 6, width: "fit-content" }}
        >
          <AlertTitle>Payment Success</AlertTitle>
          Your Order has been placed
        </Alert>
      </div>

      <OrderTracker activeStep={1} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 py-5 pt-20">
        <div className="lg:col-span-2 space-y-5">
          

          {orderStore.order?.orderItems.map((item) => (
            <Grid
              key={item.id}
              container
              item
              className="shadow-xl rounded-md p-5"
              sx={{ alignItems: "center", justifyContent: "space-between" }}
            >
              <Grid item xs={6}>
                <div className="flex items-center">
                  <div>
                    <img
                      className="w-[5rem] h-[5rem] object-cover object-top"
                      src={item.product?.imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="ml-5 space-y-2">
                    <p>{item.product.title}</p>
                    <div className="opacity-50 text-xs font-semibold space-x-5">
                      <span>Color: {item.product.color}</span>
                      <span>Size: {item.size}</span>
                    </div>
                    <p>Seller: {item.product.brand}</p>
                    <p>Rs.{item.discountedPrice}</p>
                  </div>
                </div>
              </Grid>
            </Grid>
          ))}
        </div>

        {/* Fixed Address Card Column */} 
        <div className="lg:sticky top-0">
          <p className="my-5 font-semibold border-indigo-600 text-indigo-600">Shipping address</p>
          <AddressCard address={orderStore.order?.shippingAddress} />
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
