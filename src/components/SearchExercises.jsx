import React, { useEffect } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

export const SearchExercises = () => {
  return (
    <Stack alignItems='center' justifyContent='center' mt='37px' p='20px'>
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} textAlign='center' mb='50px'>
        Awesome Exercises You <br />
        Should Know
      </Typography>
    </Stack>
  )
}
