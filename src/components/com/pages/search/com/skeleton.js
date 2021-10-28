import React from 'react'
import Stack from 'com/ui/stack';
import Skeleton from '@mui/material/Skeleton';
import Divider from '@mui/material/Divider';
import { FrameSkeleton } from 'style/boxes'

export default function _Skeleton( props ){
 return (
    <FrameSkeleton>
      <Stack 
        spacing={1}
        divider={<Divider flexItem />}
      >
        <div>
          <Skeleton variant="text" style={{width: "25%"}}/>
          <Skeleton variant="text" style={{width: "60%"}}/>
        </div>
        <div>
          <Skeleton variant="text" style={{width: "25%"}}/>
          <Skeleton variant="text" style={{width: "60%"}}/>
        </div>
        <div>
          <Skeleton variant="text" style={{width: "25%"}}/>
          <Skeleton variant="text" style={{width: "60%"}}/>
        </div>
        <div>
          <Skeleton variant="text" style={{width: "25%"}}/>
          <Skeleton variant="text" style={{width: "60%"}}/>
        </div>
      </Stack>  
    </FrameSkeleton>
  )      
}