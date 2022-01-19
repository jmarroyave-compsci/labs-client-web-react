import React from 'react'
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import { Title, SubTitle, Small, Medium } from './item'

const Frame = styled('div')( ( { height='100%', border=false, theme } ) => ({
  width: '100%',
  overflow: 'hidden',
  flex: 1,
  height: height,
  borderWidth: (border) ? "1px" : 0,
  borderStyle: 'solid',
  borderColor: theme.palette.action.selected,
}));

const Notes = styled('span')({
  fontSize: "0.6rem",
  lineHeight: "0.75rem",    
  fontWeight: 500,
  margin: 0,
});

const _Item = styled('div')( ( { selected  } ) => ({
  margin: "0",
  padding: "0.5rem",
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  fontFamily: 'Roboto',
  userSelect : 'none',
  width: "100%",
  overflow: 'hidden',
  textOverflow: 'ellipsis'
}));

const Item = ( { id="#", selected, selectedStyle={fontWeight: "500"}, onClick, children, style={} } ) => {

  const ellipsis = { width: "100%", textOverflow: 'ellipsis', whiteSpace: 'nowrap' }
  return (
    <div id={id} style={{width: '100%'}}>
      <ButtonBase
          onClick={event => { if(onClick) onClick(event) }}
          style={{width: '100%'}}
      >
        <_Item selected={selected}>
          {( selected ) ? 
            <span style={ { ...style, ...selectedStyle  } }>{children}</span>
            :
            <span style={ { ...style  } }>{children}</span>
          }
          
        </_Item>
      </ButtonBase>  
    </div>
    )
}


const _Sub = styled('span')( ( {  } ) => ({
  margin: 0,
  marginLeft: "0.25rem",
  padding: 0,
  fontSize: "0.5rem",
  lineHeight: "0.55rem",    
}));

const Sub = ( props ) => {
  return (
      <_Sub {...props}>[{props.children}]</_Sub>
    )
}

export {
  Title, SubTitle, Small, Medium, Notes, Frame, Item, Sub, 
}
