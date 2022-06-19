import React, { useEffect, useState } from "react";

import { Box } from '@mui/material';
import { useTheme } from "@mui/material/styles";
import { autoPlay } from "react-swipeable-views-utils";
import SwipeableViews from "react-swipeable-views";
import axios from "axios";
import { API_URL } from "../../../utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export const SliderHome = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  
  const dataMoviesSlider = async () => {
    const { data } = await axios.get(`${API_URL}/discover/movie`, {
      params: {
        api_key: process.env.REACT_APP_MOVIE_API_KEY
      }
    })
    console.log(data)
  }

  useEffect(()=>{
    dataMoviesSlider();
  }, [])
  return (
    <Box>

    </Box>
  )
}
