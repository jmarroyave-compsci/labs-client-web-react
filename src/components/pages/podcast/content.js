import React from 'react'
import Stack from '@mui/material/Stack';
import Detail from './detail'
import Skeleton from './skeleton'

export default function Dashboard( props ){
  const { data, loading } = props;

  return (
    <Stack>
      {(loading)  ? 
        <Skeleton/>
      :
        <Detail data={data}/>
      }
    </Stack>
  )
}
