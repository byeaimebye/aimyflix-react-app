import React, { useEffect, useState } from "react";

import { Box, Button, IconButton, Typography } from '@mui/material';
import { useTheme } from "@mui/material/styles";
import { autoPlay } from "react-swipeable-views-utils";
import SwipeableViews from "react-swipeable-views";
import axios from "axios";
import { API_URL } from "../../../utils";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

import "./index.scss";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export const SliderHome = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [movies, setMovies] = useState<MoviesData[]>([]);
  const [information, setInformation] = useState(false);
  
  const dataMoviesSlider = async () => {
    const { data } = await axios.get(`${API_URL}/discover/movie`, {
      params: {
        api_key: process.env.REACT_APP_MOVIE_API_KEY
      }
    });
    setMovies(data.results);
  };

  useEffect(()=>{
    dataMoviesSlider();
  }, []);

  interface MoviesData {
    id: number;
    backdrop_path: string;
    title: string;
    overview: string;
    vote_count: number;
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
    setInformation(false);
  };
  
  const onClickInformation = () => {
    setInformation(true);
  };
 
  return (
    <div className="slider-home">
      <AutoPlaySwipeableViews
                interval={7000}
                enableMouseEvents
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={activeStep}
                onChangeIndex={handleStepChange}
            >
              {movies.map((movie: MoviesData) => {
                  return <div className="slider-box">
                      <div className="data-box">
                        <Typography className="title-box">{movie.title}</Typography>
                        {information && <Typography className="description-box" variant="caption">{movie.overview}</Typography>}
                        <div className="buttons-box">
                          <Button className="play-button" variant="contained">Reproducir</Button>
                          <Button className="information-button" 
                            variant="contained" 
                            onClick={onClickInformation}
                            >Mas informacion <InfoOutlinedIcon />
                          </Button>
                        </div>
                      </div>
                      <img key={movie.id} src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt="" />
                  </div>
                  })}
      </AutoPlaySwipeableViews>
    </div>
  )
}
