import React from 'react'
import Stack from '@mui/material/Stack';
import Sources from './sources';

export default function Dashboard( props ){
  var { data, loading } = props;
  data = (data) ? data : {}; 
  return (
    <Stack>
      <Sources {...props} data={data.sources}/>
   </Stack>
  )
}

