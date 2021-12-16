import React from 'react';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
export const getTheme = ( mode ) => {
  return createTheme({
    palette: {
      mode: mode,
      primary: {
        main: '#06388c',
      },
      secondary: {
        main: '#ff6d00',
        contrastText: '#fbf0f0',
      },
      error: {
        main: red.A400,
      },
    },
  });
}