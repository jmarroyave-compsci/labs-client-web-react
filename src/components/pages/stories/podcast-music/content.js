import React from 'react'
import Stack from '@mui/material/Stack';
import Grid from 'components/ui/grid';
import Item from './item';
import withData from './data/with-data-stories-podcast-music'

function Dashboard( props ){
  return (
    <Stack>
      <Grid {...props} 
          url="/podcasts/stories/music"
          item={(data) => <Item full {...data}/>}
      />
    </Stack>
  )
}

export default withData(Dashboard);