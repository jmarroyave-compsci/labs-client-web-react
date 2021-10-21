import React from 'react'
import Stack from '@mui/material/Stack';
import Sources from './sources';
import Repos from './repos';

export default function Dashboard( props ){
  return (
    <Stack>
      <Sources/>
      <Repos/>
   </Stack>
  )
}


