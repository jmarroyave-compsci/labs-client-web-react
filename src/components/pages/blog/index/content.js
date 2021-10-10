import React from 'react'
import Stack from '@mui/material/Stack';
import Grid from 'components/ui/grid';
import Item from './item';

export default function Content( props ){
  return (
    <Stack>
      <Grid {...props} 
          url="/about/log"
          item={(data) => <Item full {...data}/>}
      />
    </Stack>
  )
}