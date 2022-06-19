import React from 'react'

import { Box, Typography } from '@mui/material';
import notimg from "../../../assets/image.png";

import "./index.scss";

export const AwardsMovies = () => {
  return (
    <div className='awards-content'>
        <Typography className='subtitle-awards' variant='subtitle1'>Tendencias</Typography>
        <div className='awards-movies'>
            <Box className='award-box'>
                <img src={notimg} alt="" />
            </Box>
        </div>
    </div>
  )
}
