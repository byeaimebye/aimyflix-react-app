import React, { ChangeEvent, useEffect, useState } from 'react'

import { Box, FilledInput, IconButton, InputAdornment, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import { API_URL } from '../../../utils';
import notImage from "../../../assets/image.png";

import "./index.scss";

export const SearchMovies = () => {
 const [inputSearch, setInputSearch] = useState("");
 const [moviesSearch, setMoviesSearch] = useState([]);

  const dataSearchMovies = async (inputSearch: string) => {
    const { data } = await axios.get(`${API_URL}/search/movie`, {
      params: {
        api_key: process.env.REACT_APP_MOVIE_API_KEY,
        query: inputSearch,
      }
    });
    setMoviesSearch(data.results);
  };

 console.log(moviesSearch)

  useEffect(()=>{
    dataSearchMovies(inputSearch);
  }, []);

  const searchMovies = (e: any) => {
    setInputSearch(e.target.value);
    dataSearchMovies(inputSearch);
  };

  interface moviesSearchResponse{
    title: string;
    id: number;
    backdrop_path: string;
  }

  return (
    <div className='search-content'>
        <div className='search-movies'>
        <Typography className='title-search' variant='h2'>Todas tus peliculas en un solo sitio</Typography>
        <Typography className='subtitle-search' variant='subtitle1'>Busca tu pelicula preferida</Typography>
        <FilledInput
         onChange={searchMovies}
      endAdornment={
          <InputAdornment position='end'>
              <IconButton>
                  <SearchIcon />
              </IconButton>
          </InputAdornment>
      }
      />
        {inputSearch && <Typography>Estos son los resultados de {inputSearch}</Typography>}
        </div>
        <div className='all-search-container'>
          {moviesSearch.map((movie: moviesSearchResponse) => {
          return <Box className='search-movie-box' key={movie.id}>
                  <Typography>{movie.title}</Typography>
                  <img src={movie.backdrop_path ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}` : notImage} alt="movie"/>
            </Box> 
          })}
          
        </div>
    </div>
  )
}