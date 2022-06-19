import React from 'react'
import { HeaderHome } from './header'
import { SliderHome } from './slider';
import back from "../../assets/image.png";
import { SearchMovies } from './search';

import "./index.scss";


export const Home = () => {
  return (
    <div className='home-content'>
      <HeaderHome /> 
      <SliderHome />
      <SearchMovies />
    </div>
  )
};
