import React from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom';

import { Stack, Button, ButtonGroup } from '@mui/material';

import Logo from '../assets/images/Logo.png';



const Navbar = ({ user }) => {
	const navigate = useNavigate();
	const location = useLocation();
	
	const curPath = location.pathname;
	console.log(curPath);

	// user = JSON.parse(localStorage.getItem('user'));

	const logOut = (e) => {
		e.preventDefault();

		localStorage.removeItem('user');
		localStorage.clear()

		navigate('/login');
	}

	return (
		<Stack direction='row' justifyContent='space-around'
			sx={{gap:{sm: '100px', xs: '25px'}, mt: {sm: '32px', xs:'20px',}}} >
			<Stack direction='row' justifyContent='space-between' >
				<Link to='/'>
					<img src={Logo} alt="logo" 
						style={{width: '48px', height: '48px', margin: '0 20px'}}/>
				</Link>
				<Stack direction='row' gap='40px' fontSize='16px' alignItems='center' justifyContent='center' 
				sx={{gap:{sm: '30px', xs: '20px'}, fontSize:{sm:'24px',}}}>
					{((curPath==='/') ?  <Link to='/' style={{textDecoration: 'none', color: '3a1212', borderBottom: '3px solid #ff2625'}} className='link'>Home</Link> : <Link to='/' style={{textDecoration: 'none', color: '3a1212',}} className='link'>Home</Link>)}
				
					{((curPath==='/user-plan') ? <Link to='/user-plan' style={{textDecoration: 'none', color: '3a1212', borderBottom: '3px solid #ff2625'}} className='link'>Workout Plan</Link> : <Link to='/user-plan' style={{textDecoration: 'none', color: '3a1212'}} className='link'>Workout Plan</Link>)}

					{((curPath === '/calculate-bmi') ? <Link to='/calculate-bmi' style={{textDecoration: 'none', color: '3a1212', borderBottom: '3px solid #ff2625'}} className='link'>BMI</Link> : <Link to='/calculate-bmi' style={{textDecoration: 'none', color: '3a1212'}} className='link'>BMI</Link>)}
					
					{((curPath === '/contact') ? <Link to='/contact' style={{textDecoration: 'none', color: '3a1212', borderBottom: '3px solid #ff2625'}} className='link'>Contact</Link> : <Link to='/contact' style={{textDecoration: 'none', color: '3a1212'}} className='link'>Contact</Link>)}
					
					{((curPath === '/reviews') ? <Link to='/reviews' style={{textDecoration: 'none', color: '3a1212', borderBottom: '3px solid #ff2625'}} className='link'>Give Feedback</Link> : <Link to='/reviews' style={{textDecoration: 'none', color: '3a1212'}} className='link'>Give Feedback</Link>)}
				</Stack>
			</Stack>
			<Stack direction='row' gap='40px' fontSize='16px' alignItems='center' justifyContent='center'
			sx={{gap:{sm: '30px', xs: '20px'}, fontSize:{sm:'24px',}}}>
				<ButtonGroup variant="contained" aria-label="outlined primary button group">
					<Button variant='contained' color='inherit' size='small' id='streak-btn' sx={{ padding:'0 20px', lineHeight:'0',   height:'40px'}}>
						🔥 <span> Streak:</span>{user.curStreak}
					</Button>
					<Button variant="contained"
						color='warning' size='small'
						sx={{ padding:'0 20px', lineHeight:'0',   height:'40px'}}
						onClick={logOut} 
					>
						Logout
					</Button>
				</ButtonGroup>
			</Stack>
		</Stack>
	)
}

export default Navbar;