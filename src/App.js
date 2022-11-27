import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';

import Register from './pages/Register'
import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';
import Navbar from './components/Navbar';

function App() {
  const user = localStorage.getItem('user');
  console.log(user);

  return (
      <Box width='400px' sx={{width: {xl : '1488px'}}} m='auto'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/exercise/:id' element={<ExerciseDetail />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Box>
  );
}

export default App;