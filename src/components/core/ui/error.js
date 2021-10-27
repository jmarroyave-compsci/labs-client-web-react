import React from 'react';
import { styled } from '@mui/material/styles';

const Frame = styled('div')({
  backgroundColor: 'red',
  color: 'white',
  border: '1px solid #A00',
  margin: '1rem',
  padding: '1rem',
});

const Title = styled('h3')({
  margin: 0
})

const Reference = styled('div')({
  fontSize: '0.75rem',
  textTransform: 'uppercase',
})

const Detail = styled('div')({
  fontSize: '0.75rem',
  fontFamily: 'monospace',
  backgroundColor: 'white',
  padding: '0.5rem',
  color: 'black',
})

export const ERROR_HEADER_TEXT = "ERROR: error in components"

export default function Error( props ) {
    var { from, data } = props;
    from = (from) ? from : "-";

    return (
        <Frame>
            <Title>{ERROR_HEADER_TEXT}</Title>
            <Reference>{from}</Reference>
            <hr/>
            <Detail>
              {data &&
                <div>{data.toString()}</div>
              }
            </Detail>          
        </Frame>
    )
}