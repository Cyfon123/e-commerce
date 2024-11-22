import { Grid } from '@mui/material'
import React from 'react'
import Achivement from './Achivement'
import MonthlyOverview from './MonthlyOverview'
import ProductsTableView from '../view/ProductsTableView'

const AdminDashboard = () => {
  return (
    <div className='px-10 mt-10'>
        <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
                <Achivement/>
            </Grid>
            <Grid item xs={12} md={8}>
                <MonthlyOverview/>
            </Grid>
            <Grid item xs={12} md={7} >
                <ProductsTableView/>
            </Grid>
        </Grid>
    </div>
  )
}

export default AdminDashboard