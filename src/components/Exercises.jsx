import React, { useEffect, useState } from 'react';
import { Pagination, Box, Stack, Typography } from '@mui/material';
// for pagination use /Pagination

import { ExerciseCard } from './ExerciseCard';

import { exerciseOptions, fetchData } from '../utils/fetchData';

export const Exercises = ({ exercises, setExercises, bodyPart }) => {
  // Check if exercises is an array before mapping over it
  if (!Array.isArray(exercises)) {
    // If exercises is not an array, set it to an empty array to prevent errors
    exercises = [];
  }

  return (
    <Box id="exercises"
      sx={{ mt: { lg: '110px' } }}
      mt='50px'
      p='20px'
    >
      <Typography variant="h4" mb='46px'>
        Showing Results
      </Typography>
      <Stack direction='row' sx={{ gap: { lg: '110px', xs: '50px' } }} flexWrap='wrap' justifyContent='center'>
        {exercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
    </Box>
  );
};
  