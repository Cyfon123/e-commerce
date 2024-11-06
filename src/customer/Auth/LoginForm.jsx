import { Button, Grid, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUser, login } from '../../State/Auth/Action';

const LoginForm = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");
    const {auth} = useSelector(store=>store)

    useEffect(()=>{
        if(jwt)
        {
            dispatch(getUser(jwt))
        }
    },[jwt,auth.jwt])

    const handleSubmit = (event)=>{
        event.preventDefault()

        const data = new FormData(event.currentTarget);

        const userData = {
            email:data.get("email"),
            password:data.get("password"),

        }
        dispatch(login(userData)).then(() => {
            // Navigate to login or another page upon successful registration
            navigate("/");
        })
        .catch((error) => {
            // Handle registration errors here
            console.error("Login error:", error);
        });

        console.log("userData :- ",userData);
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
               
                
                <Grid item xs={12}>
                    <TextField 
                    required
                    id='email'
                    name='email'
                    label='email'
                    fullWidth
                    autoComplete='email'/>
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                    required
                    id='password'
                    name='password'
                    label='password'
                    fullWidth
                    autoComplete='password'/>
                </Grid>
                <Grid item xs={12}>
                    <Button
                    className='w-full'
                    type='submit'
                    variant='contained'
                    size='large'
                    sx={{padding:".8rem",bgcolor:"#9155FD"}}>Login</Button>
                </Grid>
            </Grid>
        </form>

        <div className='py-3 flex items-center justify-center'> 
            <p>if you don't have account ?</p>
            <Button className='ml-5' onClick={()=>navigate("/register")}>Register</Button>
        </div>
    </div>
  )
}

export default LoginForm