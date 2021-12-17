import React from 'react'
import { grey } from '@mui/material/colors';
import Color from 'color';
import fontColorContrast from 'font-color-contrast';

export function getGrey( theme, intensity ){
  const dark = ( theme.palette.mode === "dark" ) 
  intensity = ( intensity > 9 ) ? 9 : intensity;
  intensity = (dark) ? 10 - intensity : intensity
  const color = Color( ( intensity == 10 || intensity == 0 ) ? ((dark) ? 'black' : 'white') : grey[intensity * 100]);
  const fontColor = ((dark) ? color.darken(0.75) : color.lighten(0.75)).negate()
  //console.log(color.rgb().toString(), fontColor.rgb().toString(), intensity)
  return { backgroundColor: color.fade(0.5).rgb().toString(), color: fontColor.rgb().toString() }  
}
