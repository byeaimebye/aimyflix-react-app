import React from 'react';

import SearchIcon from '@mui/icons-material/Search';
import { FilledInput, IconButton, InputAdornment, TextField } from '@mui/material';

import "./index.scss";

export const SearchHeader = () => {
  return (
    <div className='search-bar'>
      <FilledInput
      endAdornment={
          <InputAdornment position='end'>
              <IconButton>
                  <SearchIcon />
              </IconButton>
          </InputAdornment>
      }
      />
    </div>
  );
};
