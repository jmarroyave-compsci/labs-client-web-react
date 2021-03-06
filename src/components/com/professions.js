import React from 'react'
import { styled } from '@mui/material/styles';
import Pill from 'core/ui/pill'
import Stack from 'com/ui/stack';

const Title = styled('h1')({
  margin: 0,
});

export default function Professions( props ){
  const { data } = props;

  if(!data) return <div/>;
  
  return (
    <Stack direction={'row'}>
      {data.map( (_item, idx) => <Pill key={idx} text={_item}/> )}
    </Stack>
  )
}
