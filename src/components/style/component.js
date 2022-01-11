import React from 'react'
import { styled } from '@mui/material/styles';
import Paper from 'core/ui/paper';
import ButtonBase from '@mui/material/ButtonBase';

export const Title = styled("h3")( ( {  } ) => ({
  padding: 0,
  margin: 0,
  marginBottom: '1rem',
}));

export const Subtitle = styled("h6")( ( {  } ) => ({
  padding: 0,
  margin: 0,
  marginBottom: '1rem',
}));

export const Frame = styled(Paper)( ( { padding="1rem" } ) => ({
  margin: "0 0 1rem 0",
  padding: padding,
  width: '100%',
  overflow: 'hidden',
  flex: 1,
}));

export const _Item = styled('div')( ( { padding="1rem", selected=false } ) => ({
  margin: "0",
  padding: padding,
  cursor: 'pointer',
  fontWeight: (selected) ? 'bold' : 'inherit',
}));


export const Item = ( props ) => {
  return (
      <ButtonBase
          onClick={event => props.onClick }
      >
        <_Item {...props}>
          {props.children}
        </_Item>
      </ButtonBase>  
    )
}