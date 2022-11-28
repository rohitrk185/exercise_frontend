import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

import { Stack, Button } from '@mui/material';

import Logo from '../assets/images/Logo.png';



const Navbar = () => {
  const navigate = useNavigate();

  const logOut = (e) => {
    e.preventDefault();

    localStorage.removeItem('user');

    navigate('/login');
  }

  return (
    <Stack direction='row' justifyContent='start'
      sx={{gap:{sm: '100px', xs: '25px'}, mt: {sm: '32px', xs:'20px',}}} >
      <Link to='/'>
        <img src={Logo} alt="logo" 
          style={{width: '48px', height: '48px', margin: '0 20px'}}/>
      </Link>
      <Stack direction='row' gap='40px' fontSize='16px' alignItems='flex-end' justifyContent='center' alignContent='center'
      sx={{gap:{sm: '30px', xs: '20px'}, fontSize:{sm:'24px',}}}>
        <Link to='/' style={{textDecoration: 'none', color: '3a1212', borderBottom: '3px solid #ff2625'}}>Home</Link>
        <a href="/#exercises" style={{textDecoration:'none', color:'#3a1212'}}>Exercises</a>
        <Link to='/user-plan' style={{textDecoration: 'none', color: '3a1212'}}>Workout Plan</Link>
        <Button variant="contained"
          color='warning'
          sx={{ padding:'0 20px', lineHeight:'0', height:'40px'}}
          onClick={logOut} 
        >
          Logout
        </Button>
      </Stack>
    </Stack>
  )
}

export default Navbar;