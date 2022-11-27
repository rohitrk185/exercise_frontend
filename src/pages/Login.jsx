import React, { useRef } from 'react'


function Login() {
	const nameRef = useRef('');
	const emailRef = useRef('');
	const passwordRef = useRef('');
	const confirmPasswordRef = useRef('');

  return (
    <div>
			<h1>Register</h1>
			<form onSubmit={onSubmit}>
				<input type="text" placeholder='Name' ref={nameRef} />
				<input type="email" placeholder='Email' ref={emailRef} />
				<input type='password' placeholder='Password' ref={passwordRef} />
				<input type='password' placeholder='Confirm Password' ref={confirmPasswordRef} />
				<input type="submit" value="Submit" />
			</form>
    </div>
  )
}

export default Login;