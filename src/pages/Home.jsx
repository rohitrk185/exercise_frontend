import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box } from '@mui/material';

import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';

const Home = ({ user }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if(!user) {
      navigate('/login');
    }
  }, [user]);

  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);

  // console.log(bodyPart);
  
  return (
    <Box width='400px' sx={{width: {xl : '1488px'}}} m='auto'>
    <HeroBanner user={user} />
    <SearchExercises 
      setExercises={setExercises} 
      bodyPart={bodyPart}
      setBodyPart={setBodyPart}
      user={user} 
      />
    <Exercises 
      exercises={exercises}
      setExercises={setExercises} 
      bodyPart={bodyPart}
      user={user}
    /> 
  </Box>
  )
};

export default Home;