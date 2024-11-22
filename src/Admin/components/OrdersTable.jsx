import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { confirmOrder, deleteOrder, deliveredOrder, getOrders, shipOrder } from '../../State/Admin/Order/Action';
import { Avatar, AvatarGroup, Button, Card, CardHeader, Menu, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const OrdersTable = () => {

  const [anchorEl, setAnchorEl] = useState([]);
  const open = Boolean(anchorEl);

  const handleClick = (event, index) => {
    const newAnchorElAreray = [...anchorEl];
    newAnchorElAreray[index] = event.currentTarget;
    setAnchorEl(newAnchorElAreray);
  };
  const handleClose = (event, index) => {
    const newAnchorElAreray = [...anchorEl];
    newAnchorElAreray[index] = null;
    setAnchorEl(newAnchorElAreray);
  };

  const handleShippedOrder = (orderId) => {
    dispatch(shipOrder(orderId))
    handleClose()
  }
  const handleConfirmedOrder = (orderId) => {
    dispatch(confirmOrder(orderId))
    handleClose()
  }
  const handleDeliveredOrder = (orderId) => {
    dispatch(deliveredOrder(orderId))
    handleClose()
  }
  const handleDeleteOrder = (orderId) => {
    dispatch(deleteOrder(orderId))
    handleClose()
  }

  const dispatch = useDispatch();
  const { adminOrder } = useSelector(store => store);

  useEffect(() => { dispatch(getOrders()) }, [adminOrder.confirmed, adminOrder.shipped, adminOrder.delivered, adminOrder.deletedOrder]);

  { console.log("admin Orders", adminOrder) }


  return (
    <div className='p-5'>
      <Card className='mt-2'>
        <CardHeader title='All Products' />

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>S.No</TableCell>
                <TableCell align="left">Products</TableCell>
                <TableCell align="left">Title</TableCell>
                <TableCell align="left">Id</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">Update</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="left">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {adminOrder.orders?.map((item, index) => (
                <TableRow
                  key={item.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell>{index + 1}</TableCell>
                  <TableCell align='left' >
                    <AvatarGroup max={2} sx={{ justifyContent: 'start' }}>
                      {item.orderItems.map((orderItem, index) => <Avatar key={index} src={orderItem.product.imageUrl}></Avatar>)}
                    </AvatarGroup>
                  </TableCell>
                  <TableCell align="left" scope="row">
                    {item.orderItems.map((orderItem) => <p>{orderItem.product.title}</p>)}
                  </TableCell>
                  <TableCell align="left">{item.id}</TableCell>
                  <TableCell align="left">{item.totalDiscountedPrice}</TableCell>
                  <TableCell align="left" >
                    <Button variant='outlined' sx={`
                         ${item.orderStatus === "CONFIRMED" ? "bg-green-500" :
                        item.orderStatus === "SHIPPED" ? "bg-blue-500" :
                          item.orderStatus === "PLACED" ? "bg-gray-500" :
                            item.orderStatus === "PENDING" ? "bg-yellow-500" :
                              "bg-red-500"}`}>{item.orderStatus}</Button>

                  </TableCell>

                  <TableCell align="left">

                    <Button
                      id="basic-button"
                      aria-haspopup="true"
                      onClick={(event) => handleClick(event, index)}
                      aria-controls={`basic-menu-${item.id}`}
                      aria-expanded={Boolean(anchorEl[index])}
                    >
                      Status
                    </Button>
                    <Menu
                      id={`basic-menu-${item.id}`}
                      anchorEl={anchorEl[index]}
                      open={Boolean(anchorEl[index])}
                      onClose={(event) => handleClose(event, index)}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button',
                      }}
                    >
                      <MenuItem onClick={() => handleConfirmedOrder(item.id)}>Confirmed Order</MenuItem>
                      <MenuItem onClick={() => handleShippedOrder(item.id)}>Shipped Order</MenuItem>
                      <MenuItem onClick={() => handleDeliveredOrder(item.id)}>Delivered Order</MenuItem>
                    </Menu>
                  </TableCell>
                  <TableCell align="left">
                    <Button variant='outlined' onClick={() => handleDeleteOrder(item.id)}>Delete</Button>
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

export default OrdersTable