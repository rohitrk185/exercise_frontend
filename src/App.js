import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

import './App.css';

import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';
import Bmi from './pages/Bmi';
import Navbar from './components/Navbar';
import UserPlan from './components/UserPlan';
import Review from './pages/Review';


function App() {
  const navigate = useNavigate();
  
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if(user) {
      localStorage.setItem('user',JSON.stringify(user));
    } else {
      navigate('/login')
    }
  }, [user])
  

  return (
    <>
      {(user) ? (
        <Box width='400px' sx={{width: {xl : '1488px'}}} m='auto'>
        <Navbar user={user}/>
        <Routes>
          <Route path='/' element={<Home user={user} />} />
          <Route path='/exercise/:id' element={<ExerciseDetail user={user} />} />
          <Route path='/register' element={<Register user={user} />} />
          <Route path='/login' element={<Login user={user} />} />
          <Route path='/user-plan' element={<UserPlan user={user} />} />
          <Route path='/calculate-bmi' element={<Bmi />} />
          <Route path='/reviews' element={<Review user={user} />} />
        </Routes>
      </Box>
      ) : (
        <Routes>
          {/* <Route path='/' element={<Login />} /> */}
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register  />} />
        </Routes>
      )}
      
      <ToastContainer
          position="top-right"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
    </>
  );
}

export default App;