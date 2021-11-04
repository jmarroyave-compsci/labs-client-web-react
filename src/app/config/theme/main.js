import React from 'react';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
export const getTheme = ( mode ) => {
  return createTheme({
    palette: {
      mode: mode,
      primary: {
        main: '#556cd6',
      },
      secondary: {
        main: '#19857b',
      },
      error: {
        main: red.A400,
      },
    },
  });
}

export const theme = getTheme( "light" );

export const toggleMode = (theme, setTheme) => {
  const mode = ( theme.palette.mode === "light" ) ? "dark" : "light";
  //console.log("toggling the theme from ", theme.palette.mode, " -> " , mode)
  setTheme( getTheme( mode ) );
}

export const ThemeContext = React.createContext( {
    theme: theme,
})

