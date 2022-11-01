import React, { useState } from 'react';

import { Box } from '@mui/material';

import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';

const Home = () => {
  return (
    <Box width='400px' sx={{width: {xl : '1488px'}}} m='auto'>
       <HeroBanner />
       <SearchExercises />
       <Exercises />
    </Box>
  )
}

export default Home