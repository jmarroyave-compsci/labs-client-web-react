import React from 'react'
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';
import Divider from '@mui/material/Divider';

export default function _Skeleton( props ){
 return (
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
  )      
}