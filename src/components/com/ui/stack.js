import React from 'react'
import _Stack from '@mui/material/Stack';

export default function Stack ( props ){
  return <_Stack {...props}>{props.children}</_Stack>
}