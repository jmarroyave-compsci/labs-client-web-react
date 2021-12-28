import React from 'react'
import Stack from 'com/ui/stack';
import Skeleton from '@mui/material/Skeleton';
import { FrameSkeleton } from 'style/boxes'

export default function _Skeleton( props ){
  return (
    <FrameSkeleton>
      <Stack spacing={1} sx={{ padding: '1rem', display: 'flex', flexGrow: 1}}>
        <Skeleton variant="rectangular" height={150} />
      </Stack>  
    </FrameSkeleton>
  )      
}