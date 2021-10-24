import React from 'react'
import _Paper from '@mui/material/Paper';

export default function Paper ( props ){
  return <_Paper {...props}>{props.children}</_Paper>
}