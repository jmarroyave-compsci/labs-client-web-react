import React from 'react'
import Stack from '@mui/material/Stack';
import Grid from './grid';
import withData from './data/with-data-stories-podcast-music'

function Dashboard( props ){
  return (
    <Stack>
      <Grid {...props}/>
    </Stack>
  )
}

export default withData(Dashboard);