import React, { useState } from 'react'
import axios from 'axios';

import { Typography, Stack, Button } from '@mui/material'

import TargetImage from '../assets/icons/target.png';
import BodyPartImage from '../assets/icons/body-part.png';
import EquipmentImage from '../assets/icons/equipment.png';
import { toast } from 'react-toastify';


const Detail = ({ exerciseDetail, user }) => {
    const {bodyPart, gifUrl, name, target, equipment, id } = exerciseDetail;
    
    let temp = false;
    if(user.exercises.includes(id)) {
        temp = true;
        console.log(temp);
    }
    
    const [isPresent, setIsPresent] = useState(temp);
    console.log(isPresent);

    const extraDetail = [ 
        {
            icon: BodyPartImage,
            name: bodyPart,
        }, {
            icon: TargetImage,
            name: target,
        }, {
            icon: EquipmentImage,
            name: equipment,
        },
    ];


    const togglePlan = async (e) => {
        e.preventDefault();

        const requestOptions = {
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`    
            },
        };
        const exerciseData = {
            name,
            exerciseId: id,
            target,
            bodyPart,
            equipment,
            gifUrl,
        }
        const url = `${process.env.REACT_APP_BACKEND_URL}/api/exercises`;
        
        const fetchFunc = async () => {
            try {
                const res = await axios.post(url, JSON.stringify(exerciseData), requestOptions);
    
                if(res.data) {
                    console.log(user);
                    user.exercises = res.data.exercises;
                    console.log(user);
                    localStorage.setItem('user', JSON.stringify(user));
                    console.log(JSON.parse(localStorage.getItem('user')));
                    setIsPresent(prev => !prev);
                    if(!isPresent) {
                        toast.success("Added to your Workout Plan");
                    } else {
                        toast.success("Removed from your Workout Plan");
                    }
                }
            } catch(error) {
                const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
                toast.error(message);
            }
        }
        fetchFunc();
    }

    // useEffect(() => {
    //     if(isPresent) {
    //         toast.success("Added to your Workout Plan");
    //     } else {
    //         toast.success("Removed from your Workout Plan");
    //     }
    // }, [isPresent]);
    
    
    return (
        <Stack gap='60px' sx={{
            flexDirection: {lg : 'row'}, padding: '20px', 
            alignItems: 'center', 
        }}>
            <img src={gifUrl} alt={name} loading='lazy'  
                className='detail-image' />
            <Stack sx={{gap: {lg: '35px', xs: '20px'}}}>
                <Typography variant='h3' textTransform='capitalize' flexDirection='row' justifyContent='space-between'>
                    <span>
                        {name}
                    </span>
                    {(isPresent) ? <Button variant="contained" href='#exercises'
                        sx={{ padding: '10px 15px', marginLeft: '50px'}} size='small' color='error' onClick={togglePlan}>
                        Remove from Workout Plan
                    </Button> : <Button variant="contained" href='#exercises' 
                        sx={{ padding: '10px 15px', marginLeft: '50px'}} size='small' color='success' onClick={togglePlan}>
                        Add to Workout Plan
                    </Button>}
                </Typography>
                <Typography variant='h6'>
                    Exercises keep you strong. {name} is one of the best exercises to target your {target}. It will help you improve your mood and gain energy.
                </Typography>

                {extraDetail.map((item) => (
                    <Stack key={item.name} direction='row' gap='24px' alignItems='center'>
                        <Button sx={{
                            background: '#fff2db', borderRadius: '50%',
                            width: '90px', height: '90px'
                        }}>
                            <img src={item.icon} alt={bodyPart} style={{width: '45px', height: '45px'}}/>
                        </Button>
                        <Typography variant='h5' textTransform='capitalize'>
                            {item.name}
                        </Typography>
                    </Stack>
                ))}
            </Stack>
        </Stack>
    )
}

export default Detail;