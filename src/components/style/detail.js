import React from 'react'
import { styled } from '@mui/material/styles';

export const Padding = styled('div')({
  padding: '1rem',
});


export const Title = styled('h2')({
  fontSize: "2.5rem",
  lineHeight: "2.5rem",
  padding: '0',
  margin: '0 0 0.75rem 0',
});

export const SubTitle = styled('h3')({
  fontSize: "1.8rem",
  lineHeight: "2rem",
  textTransform: 'lowercase',
  padding: '0',
  margin: '0 0 0.5rem 0',
});


export const FieldLabel = styled('div')({
  fontSize: "0.7rem",
  lineHeight: "0.75rem",
  textTransform: 'uppercase',  
  fontWeight: '400',
  margin: '0 0 0.15rem 0',
  padding: '0',
});

export const FieldValue = styled('div')({
  fontSize: "1rem",
  lineHeight: "1.25rem",
  margin: '0 0 0.5rem 0',
});

export const Paragraph = styled('div')({
    margin: 0,
    marginBottom: '1rem',
});

export const Small = styled('span')({
  fontSize: "0.7rem",
  lineHeight: "0.75rem",    
  margin: 0,
});

export const Notes = styled('span')({
  fontSize: "0.6rem",
  lineHeight: "0.75rem",    
  fontStyle: 'italic',
  margin: 0,
});


export const Medium = styled('div')({
  fontSize: "1rem",
  lineHeight: "1.25rem",    
  margin: 0,
});
