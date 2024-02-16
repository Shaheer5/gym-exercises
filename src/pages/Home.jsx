import { Box } from '@mui/material'
import React, { useState } from 'react'
import { HeroBanner } from '../components/HeroBanner'
import { Exercises } from '../components/Exercises'
import { SearchExercises } from '../components/SearchExercises'

export const Home = () => {

  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all')

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        exercises={setBodyPart}
        setExercises={setExercises}
        bodyPart={bodyPart}
      />
      <Exercises
        exercises={setBodyPart}
        setExercises={setExercises}
        bodyPart={bodyPart}
      />
    </Box>
  )
}
