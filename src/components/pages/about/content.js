import React from 'react'
import Stack from '@mui/material/Stack';
import Roadmap from './roadmap';
import Sources from './sources';
import LoC from './loc';

export default function Dashboard( props ){
  var { data, loading } = props;
  data = (data) ? data : {}; 
  return (
    <Stack>
      <Sources {...props} data={data.sources}/>
      <LoC/>
      <Roadmap/>
   </Stack>
  )
}

