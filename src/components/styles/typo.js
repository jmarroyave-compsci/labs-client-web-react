import React from 'react'
import { styled } from '@mui/material/styles';

export const Title = styled('h2')({
  padding: '1rem 0',
  textTransform: 'lowercase',
  fontSize: "2.5rem",
});

export const SubTitle = styled('h3')({
  marginTop: '1rem',
  marginBottom: '0rem',
});


const _Field = styled('div')({
  fontSize: '0.9rem',
  lineHeight: "1rem",
  marginBottom: '0.5rem',
});

export function Field(props){
    const { data, title, format } = props
    if( !data ) return null;

    var value = data;
    switch( format ){
        case "date":
          value = <Date value={data}/>
    }

    return (
      <_Field>{title}: {value}</_Field>
    )
}