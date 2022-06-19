import React from 'react';

import { AppBar, Typography } from '@mui/material';
import { LogoAimyflix } from '../../../assets/logo/logo-aimyflix';
import { SearchHeader } from '../../../components/search';

import "./index.scss";

export const HeaderHome = () => {
  return (
    <div className='header'>
      <AppBar position='static' className='header'>
          <div className='logo-section'>
              <LogoAimyflix />
          </div>
          <div className='options-header'>
              <li className='header-list-item'>
                <Typography>Inicio</Typography>
              </li>
              <li className='header-list-item'>
                <Typography>Series</Typography>
              </li>
              <li className='header-list-item'>
                <Typography>Películas</Typography>
              </li>
              <li className='header-list-item'>
                <Typography>Novedades populares</Typography>
              </li>
          </div>
          <div className='search-bar-home'>
              <SearchHeader />
          </div>
      </AppBar>
    </div>
  );
};
