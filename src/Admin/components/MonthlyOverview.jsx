import React from 'react'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonIcon from '@mui/icons-material/Person';
import CategoryIcon from '@mui/icons-material/Category';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar, Box, Card, CardContent, CardHeader, Grid, IconButton, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const salesData = [
    {stats:'50k',title:'Sales',color:'primary',icon:<TrendingUpIcon/>},
    {stats:'40k',title:'Customers',color:'success',icon:<PersonIcon/>},
    {stats:'50k',title:'Products',color:'warning',icon:<CategoryIcon/>},
    {stats:'50k',title:'Revenue',color:'info',icon:<AttachMoneyIcon/>}
 
]



const renderSalesData = (theme)=> {
    return salesData.map((item,index)=>{
        return(<Grid item xs={12} sm={3} key={index}>
            <Box sx={{display:'flex', alignItems:'center'}}>

                <Avatar variant='rounded' sx={{mr:3,width:44,height:44,boxShadow:3,color:"white",background:theme.palette[item.color].main}}>
                    {item.icon}
                </Avatar>

                <Box sx={{display:'flex', flexDirection:'column'}}>
                    <Typography variant='caption'>{item.title}</Typography>
                    <Typography variant='h6'>{item.stats}</Typography>
                </Box>
            </Box>
        </Grid>)
    })
}
const MonthlyOverview = () => {
    const theme =useTheme();
  return ( 
    <Card sx={{bgcolor:'black', color:'white'}}>
        <CardHeader title='Monthly Overview' 
                    action={<IconButton size='small'><MoreVertIcon/></IconButton>}
                    subheader={
                               <Typography variant='body2'>
                                 <Box component='span' sx={{fontWeight:600,color:'text.primary'}}>Total 50% Growth</Box>
                               </Typography>}
                    titleTypographyProps={{
                        sx:{
                            mb:2.5,
                            lineHeight:'2rem !important',
                            letterSpacing:'.15px !important'
                        }
                    }}>
        </CardHeader>

        <CardContent sx={{pt: theme=>`${theme.spacing(3)} !important`}}>
            <Grid container spacing={[5,0]}>
                {renderSalesData(theme)}
            </Grid>
        </CardContent>
    </Card>
  )
}

export default MonthlyOverview