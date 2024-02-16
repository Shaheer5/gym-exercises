import React, { useEffect, useState } from 'react';
import { Pagination, Box, Stack, Typography } from '@mui/material';
// for pagination use /Pagination

import { exerciseOptions, fetchData } from '../utils/fetchData';

export const Exercises = ({ exercises, setExercises, bodyPart }) => {
  return (
    <Box id="exercises"
      sx={{ mt: {lg: '110px' }}}
      mt='50px'
      p='20px'
    >
      <Typography variant="h4" mb='46px'>
        Showing Results
      </Typography>
    </Box>
  )
}
