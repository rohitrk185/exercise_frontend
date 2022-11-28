import React, { useState, useEffect } from 'react'
import axios from 'axios';

import { toast } from 'react-toastify';
import { Stack } from '@mui/material'

import ExerciseCard from './ExerciseCard';


function UserPlan({ user }) {
    const [userExercises, setUserExercises] = useState([]);

    useEffect(() => {
        const helpFunc = async () => {
            console.log(user);
            try {
                const requestOptions = {
                    headers: { 
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${user.token}`
                    },
                };
            
                const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/exercises`, requestOptions);
                
                if(res.data) {
                    setUserExercises(res.data.exercises);
                }
            } catch(error) {
                const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
                toast.error(message);
            }
        };
        helpFunc();
    }, []);

    console.log(userExercises);

    return (
        ((userExercises.length > 0)? (<Stack direction='row' sx={{gap: {lg: '110px', xs: '50px'}, marginTop: '75px'}} flexWrap='wrap' justifyContent='center'>
        {userExercises.map((exercise, index) => (
          <ExerciseCard key={exercise.exerciseId} exercise={exercise}/>
        ))}
      </Stack>) : (<h1 className='heading' style={{marginTop: '75px'}}> No exercises found in your Workout Plan😥</h1>))
    )
}

export default UserPlan;