import React, { useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { toast } from 'react-toastify';


function Login() {
    const navigate = useNavigate();
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if(user) {
            navigate('/');
        }
    }, [navigate]);
    
    
	const emailRef = useRef();
	const passwordRef = useRef();

    const onSubmit = async (e) => {
        e.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;


        const userData = { 
            email, 
            password,
        };
        try {
            const requestOptions = {
                headers: { 'Content-Type': 'application/json' },
            };
        
            const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/users/login`, JSON.stringify(userData), requestOptions);

            if(res.data) {
                localStorage.setItem('user', JSON.stringify(res.data));
                toast.success('Login successful😊');
                navigate('/');
            }
        } catch(error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            toast.error(message);
        }
    };

return (
    <div style={{margin: '20px auto'}}>
        <section className="heading">
            <h1>
                Login
            </h1>
            <p>Enter your registered details</p>
        </section>

        <section className="form">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <input type="email" className='form-control'
                        id='email' name='email' ref={emailRef}
                        placeholder='Enter email' required
                    />
                </div>
                <div className="form-group">
                    <input type="password" className='form-control'
                        id='password' name='password' ref={passwordRef}
                        placeholder='Enter password' required
                    />
                </div>
                
                <div className="form-group">
                    <button type='submit' className='btn btn-block'>Login</button>
                </div>
            </form>

            <div className="form-group" style={{marginTop: '40px',}}>
                <p style={{textAlign: 'center',}}>Don't have an Account?</p> 
                <button type='submit' className='btn btn-block'
                    style={{width: 'max(50%, 80px)', margin: '5px auto',}}
                    onClick={(e) => {navigate('/register')}}>
                    Create Account
                </button>
            </div>
        </section>
    </div>
  )
}

export default Login;