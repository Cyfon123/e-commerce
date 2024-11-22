import React, { useState } from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { Box, CssBaseline, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import { Route, Routes, useNavigate } from 'react-router-dom';
import CreateProductForm from './components/CreateProductForm';
import ProductsTable from './components/ProductsTable';
import OrdersTable from './components/OrdersTable';
import CustomersTable from './components/CustomersTable';
import AdminDashboard from './components/AdminDashboard';
import Account from './components/Account';

const menu = [
    {name: "Dashboard", path:"/admin/dashboard", icon:<DashboardIcon/>},
    {name: "Products", path:"/admin/products", icon:<AcUnitIcon/>},
    {name: "Customers", path:"/admin/customers", icon:<SupportAgentIcon/>},
    {name: "Orders", path:"/admin/orders", icon:<ShoppingBasketIcon/>},
    {name: "AddProduct", path:"/admin/product/create", icon:<ShoppingCartIcon/>},
    {name: "Account", path:"/admin/product/account", icon:<AccountCircleIcon/>}
]

const Admin = () => {

  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [siteBarVisible, setSiteBarVisible] = useState(false);
  const navigate = useNavigate();

  const drawer = (
  <Box sx={{overflow:"auto", display:"flex", flexDirection:"column", justifyContent:"space-between", height:"100%"}}>

    <>

    {/* {isLargeScreen && <Toolbar/>} */}

    <List>
      {menu.map((item,index) => <ListItem key={item.name} disablePadding onClick={()=>navigate(item.path)}>

        <ListItemButton>
          <ListItemIcon>
            {item.icon}
          </ListItemIcon>
          <ListItemText>{item.name}</ListItemText>
        </ListItemButton>

      </ListItem>)}
    </List>

    </>


    <List>
    <ListItem disablePadding onClick={()=>navigate('/admin/product/account')}>
        <ListItemButton>
          <ListItemIcon>
            <AccountCircleIcon/>
          </ListItemIcon>
          <ListItemText>Account</ListItemText>
        </ListItemButton>

      </ListItem>
    </List>


  </Box>)
  return (

      <div className=' relative flex h-[100vh] '>

        <CssBaseline/>

        <div className='w-[15%] border border-r-gray-300 h-full fixed top-0'>
           {drawer}
        </div>
          

        <div className='w-[85%] h-full ml-[15%]'>

          <Routes>
            <Route path='/dashboard' element={<AdminDashboard/>}></Route>
            <Route path='/product/create' element={<CreateProductForm/>}></Route>
            <Route path='/products' element={<ProductsTable/>}></Route>
            <Route path='/orders' element={<OrdersTable/>}></Route>
            <Route path='/customers' element={<CustomersTable/>}></Route>
            <Route path='/product/account' element={<Account/>}></Route>
          </Routes>
        
        </div>
      </div>
  )
}

export default Admin