import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import HeroBannerImage from '../assets/images/banner.png'

export const HeroBanner = () => {
  return (
    <Box sx={{
      mt: { lg: '212px', xs: '70px' },
      ml: { sm: '50px' }
    }} position={'relative'} p="20px">
      <Typography fontWeight={'600'} fontSize='26px' color="#FF2625">
        Fitness Club
      </Typography>
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb={'23px'} mt={'30px'}>
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontSize={'22px'} lineHeight={'35px'} mb={'20px'}>
        Check out the most effective exercises
      </Typography>
      <Button variant='contained' color='error' href='#exercises' sx={{ padding: '10px', backgroundColor: '#FF2625'}}>Explore Exercises</Button>
      <Typography fontWeight='600' color="#FF2625" sx={{ opacity: '0.2', fontSize: '200px', display: { lg: 'block', sm: 'none' } }}>
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt="hero-banner-image" className="hero-banner-image" style={{ float: 'right', position: 'absolute', top: '-300px', right: '-220px' }} />
    </Box>
  )
}
