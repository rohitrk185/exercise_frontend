import React, { useRef } from 'react'

import { Box } from '@mui/material'
import { toast } from 'react-toastify';


function Login() {
	const nameRef = useRef();
	const emailRef = useRef();
	const passwordRef = useRef();
	const confirmPasswordRef = useRef();

    const onSubmit = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const password2 = confirmPasswordRef.current.value;

        console.log(name, email, password, password2);

        if(password !== password2) {
            toast.error('Passwords do not match');
        } else {
            const userData = {
                name, 
                email, 
                password,
            }
            // dispatch(register(userData));
        }
    };

return (
    <Box >
        <h1>Register</h1>
        <form onSubmit={onSubmit}>
            <input type="text" placeholder='Name' 
                ref={nameRef}
                id='name' name='name' />
            <input type="email" placeholder='Email' 
                ref={emailRef}
                id='email' name='email' />
            <input type='password' placeholder='Password' 
                ref={passwordRef}
                id='password' name='password' />
            <input type='password' placeholder='Confirm Password' 
                ref={confirmPasswordRef}
                id='password2' name='password2' />
            <input type="submit" value="Submit" />
        </form>
    </Box>
  )
}

export default Login;