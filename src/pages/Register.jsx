import React, { useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { toast } from 'react-toastify';

// let CryptoJS = require('crypto-js');

function Login() {
    const navigate = useNavigate();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if(user) {
            navigate('/');
        }
    }, [navigate])
    
    

	const nameRef = useRef();
	const emailRef = useRef();
	const passwordRef = useRef();
	const confirmPasswordRef = useRef();

    const onSubmit = async (e) => {
        e.preventDefault();
        
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const password2 = confirmPasswordRef.current.value;

        // console.log(name, email, password, password2);

        if(password !== password2) {
            toast.error('Passwords do not match');            
        } else {
            const userData = {
                name, 
                email, 
                password,
            };


            try {
                const requestOptions = {
                    headers: { 'Content-Type': 'application/json' },
                };
            
                const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/users`, JSON.stringify(userData), requestOptions);

                if(res.data) {
                    toast.success('New User created😊');
                    navigate('/login');
                }
            } catch(error) {
                const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
                toast.error(message);
            }
        }
    };

return (
    <div style={{margin: '20px auto',}}>
        <section className="heading">
            <h1>
                {/* <FaUser/> Register */} 
                Register
            </h1>
            <p>Please create an account</p>
        </section>

        <section className="form">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <input type="text" className='form-control'
                        id='name' name='name' ref={nameRef}
                        placeholder='Enter your name' required
                    />
                </div>
                <div className="form-group">
                    <input type="email" className='form-control'
                        id='email' name='email' ref={emailRef}
                        placeholder='Enter your email' required
                    />
                </div>
                <div className="form-group">
                    <input type="password" className='form-control'
                        id='password' name='password' ref={passwordRef}
                        placeholder='Enter password' required
                    />
                </div>
                <div className="form-group">
                    <input type="password" className='form-control'
                        id='password2' name='password2' ref={confirmPasswordRef}
                        placeholder='Confirm password' required
                    />
                </div>
                
                <div className="form-group">
                    <button type='submit' className='btn btn-block'>Submit</button>
                </div>
            </form>

            <div className="form-group" style={{marginTop: '40px',}}>
                <p style={{textAlign: 'center',}}>Already have an Account?</p> 
                <button type='submit' className='btn btn-block'
                    style={{width: 'max(50%, 80px)', margin: '5px auto',}}
                    onClick={(e) => {navigate('/login')}}>
                    Login
                </button>
            </div>
        </section>
    </div>
  )
}

export default Login;