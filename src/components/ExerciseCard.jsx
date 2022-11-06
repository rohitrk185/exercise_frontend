import React from 'react'
import { Link } from 'react-router-dom';

import { Button, Stack, Typography } from '@mui/material'

const ExerciseCard =  ({ exercise }) => {
  return (
    <Link to={`/exercise/${exercise.id}`} className='exercise-card'>
      <img src={exercise.gifUrl} alt={exercise.name} loading='lazy'/>

      <Stack direction='row'>
        <Button sx={{ml: '21px', color: '#fff', background: '#ff5989', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize', padding: '5px 8px'}}>
          {exercise.bodyPart}
        </Button>
        <Button sx={{ml: '21px', color: '#000', background: '#fcc757', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize', padding: '5px 8px'}}>
          {exercise.target}
        </Button>
      </Stack>

      <Typography ml='21px' fontSize='22px' color='#000' fontWeight='bold' mt='11px' pb='10px' textTransform='capitalize'>
        {exercise.name}
      </Typography>
    </Link>
  )
}

export default ExerciseCard