import React from 'react'
import Stack from '@mui/material/Stack';
import Roadmap from './roadmap';

export default function Dashboard( props ){
  var { data, loading } = props;
  data = (data) ? data : {}; 
  return (
    <Stack>
      <Roadmap/>
   </Stack>
  )
}

