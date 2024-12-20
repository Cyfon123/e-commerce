import { Button, Card, CardContent, styled, Typography } from '@mui/material'
import React from 'react'

const TiangleImg = styled("img")({right:0,bottom:0,height:170,position:'absolute'})

const TrophyImg = styled("img")({right:36,bottom:20,height:98,position:'absolute'})


const Achivement = () => {
  return (
    <Card sx={{position:'relative', bgcolor:'black', color:'white'}}>
        <CardContent>
            <Typography variant='h6' sx={{letterSpacing:".25px"}}>Come And Buy</Typography>
            <Typography variant='body2'>Congratulations </Typography>
            <Typography variant='h5' sx={{my:3.1}}>420.9k </Typography>

            <Button size='small' variant='contained'>View Sales</Button>
            <TiangleImg src=''/>
            <TrophyImg src=''/>
        </CardContent>
    </Card>
  )
}
 
export default Achivement