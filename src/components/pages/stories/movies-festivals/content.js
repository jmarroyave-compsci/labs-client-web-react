import React from 'react'
import Stack from '@mui/material/Stack';
import Grid from 'components/ui/grid';
import Item from './item';
import withData from './data/fetch'

function Dashboard( props ){
  return (
    <Stack>
      <Grid {...props} 
          url="/stories/remakes"
          item={(data) => <Item full {...data}/>}
      />
    </Stack>
  )
}

export default withData(Dashboard);