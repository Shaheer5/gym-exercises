import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import { HorizontalScrollbar } from './HorizontalScrollbar';

export const SearchExercises = () => {

  const [search, setSearch] = useState('');
  const [exercises, setExercises] = useState([])
  const [bodyParts, setBodyParts] = useState([])

  useEffect(() => {
    const fetchExerciseData = async() => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)
      setBodyParts(['all', ...bodyPartsData])

    }
    fetchExerciseData();

  }, [])
  
  const handleSearch = async (e) => {
    e.preventDefault();
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=10000', exerciseOptions);
      console.log(exercisesData, exerciseOptions);

      const searchedExercises = exercisesData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)
      )
      setSearch('');
      setExercises(searchedExercises);
    }
  }


  return (
    <form onSubmit={e => handleSearch}>
      <Stack alignItems='center' justifyContent='center' mt='37px' p='20px'>
        <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} textAlign='center' mb='50px' mt='40px'>
          Awesome Exercises You <br />
          Should Know
        </Typography>
        <Box position='relative' mb='72px'>
          <TextField
            sx={{
              input: { fontWeight: '700', border: 'none', borderRadius: '4px' },
              width: { lg: '800px', xs: '350px' },
              backgroundColor: "#FFF",
              borderRadius: '4px',
            }}
            height='76px'
            value={search}
            onChange={(e) => { setSearch(e.target.value.toLowerCase()) }}
            placeholder='Search Exercises'
            type='text'
          />
          <Button className='search-btn'
           type='submit'
            sx={{
              bgcolor: '#FF2625',
              color: '#FFF',
              textTransform: 'none',
              width: { lg: '175px', xs: '12px' },
              fontSize: { lg: '20px', xs: '14px' },
              height: '56px',
              position: 'absolute',
              right: '0',
            }}
            onClick={handleSearch}>
            Search</Button>
        </Box>
        <Box sx={{ position: 'relative', width:'100%', p: '20px'}}>
          <HorizontalScrollbar data={bodyParts}/>
        </Box>

      </Stack>
    </form>
  )
}
