import React from 'react';
import { Button, Stack, Typography } from '@mui/material';

import Icon from '../assets/icons/gym.png'

export const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  return (

    <Stack
      type='button'
      alignItems='center'
      justifyContent='center'
      className='bodyPart-card'
      sx={{
        borderTop: bodyPart === item ? { borderTop: '4px solid #FF2625', } : '',
        backgroundColor: "#FFF",
        borderBottomLeftRadius: '20px',
        width: '270px',
        height: '280px',
        cursor: 'pointer',
        gap: '47px'
      }}
    >
      <img src={Icon} alt="dumbbell" style={{ width: '150px', height: '150px' }} />
    </Stack >
  )
}
