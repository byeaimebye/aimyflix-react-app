import React from 'react'
import { HeaderHome } from './header'
import { SliderHome } from './slider';
import back from "../../assets/image.png";
import { AwardsMovies } from './awards';

import "./index.scss";


export const Home = () => {
  return (
    <div className='home-content'>
      <HeaderHome /> 
       <SliderHome />
       <img className='img-banner' src={back} alt=""/>
       <AwardsMovies />
    </div>
  )
};
