import React from 'react'
import { styled } from '@mui/material/styles';
import Pill from 'core/ui/pill'
import Stack from '@mui/material/Stack';

const Title = styled('h1')({
  margin: 0,
});

export default function Categories( props ){
  const { data } = props;

  if(!data) return <div/>;

  return (
    <Stack direction={'row'}>
      {<Pill text={data}/>}
    </Stack>
  )
}
