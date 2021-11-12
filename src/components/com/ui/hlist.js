import React from 'react'
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';

const Frame = styled('div')(() => ({
  padding: '1rem',
  marginBottom: '2rem',
  backgroundColor: 'transparent',
}))

export default function Tiles( props ){
    var { data, item } = props;
    return (
        <Frame>
          <Stack direction="row" style={{overflowX: 'auto'}}>
            {data.map( (it, idx) =>
              item(it)
            )}
          </Stack>
        </Frame>
    )
}

