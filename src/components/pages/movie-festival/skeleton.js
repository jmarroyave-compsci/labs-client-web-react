import React from 'react'
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';
import { FrameSkeleton } from 'components/styles/boxes'

export default function _Skeleton( props ){
 return (
    <FrameSkeleton>
      <Stack spacing={1}>
        <Skeleton variant="rectangular" height={300} />
        <Skeleton variant="text" height={"3rem"} style={{marginBottom: '1rem'}}/>
        <Skeleton variant="text" style={{width: "40%"}}/>
        <Skeleton variant="text" style={{width: "25%"}}/>
        <Skeleton variant="text" style={{width: "25%"}}/>
        <Skeleton variant="text" style={{width: "25%"}}/>
      </Stack>  
    </FrameSkeleton>
  )      
}