import React from 'react'
import Stack from '@mui/material/Stack';
import Grid from 'components/ui/grid';
import Item from './item';

function Dashboard( props ){
  return (
    <Stack>
      <Grid {...props} 
          url={`/${props.params.entity}/stories/remakes`}
          item={(data) => <Item full {...data}/>}
      />
    </Stack>
  )
}

export default Dashboard;