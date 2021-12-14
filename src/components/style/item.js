import React from 'react'
import { styled } from '@mui/material/styles';
import Paper from 'core/ui/paper';
import _Badge from '@mui/material/Badge';
import _Tooltip from "@mui/material/Tooltip";

export const Tooltip = ( { children, content } ) => {
  if(!content || content == null || content === "?") return children;
  return (
    <_Tooltip title={content} placement="bottom-start">
      {children}
    </_Tooltip>  
  )
}

export const Badge = ( { children, content } ) => {
  if(!content || content == null || content == 0) return children;
  return (
    <_Badge badgeContent={content} color="primary">
      {children}
    </_Badge>
  )
}

const _ItemFrame = styled('div')(({theme, width, height}) => ({
  backgroundColor: theme.palette.action.selected,
  margin: "0 1rem 1rem 0",
  padding: 0,
  display: 'flex', 
  color: theme.palette.text.primary,
  alignItems: 'center',
  minWidth: width,
  maxWidth: "100%",
  minHeight: height,
  maxHeight: height,
  borderRadius: '5px',
}));

const _ItemContent = styled('div')(({theme, width}) => ({
  backgroundColor: 'transparent',
  color: theme.palette.text.primary,
  padding: '0.7rem',
  display: 'block', 
  flexGrow: 1, 
  margin: "0.1rem",  
  width: "100%"
}))

export const ItemFrame = ( props ) =>{
  const { width="300px", height="300px" } = props;
  return (
    <_ItemFrame width={width} height={height}>
      <_ItemContent>
        {props.children}
      </_ItemContent>  
    </_ItemFrame>
    )
}

export const Title = styled('h2')({
  fontSize: "1.3rem",
  lineHeight: "1.5rem",
  padding: 0,
  margin: 0,
  textOverflow: "ellipsis",
  whiteSpace: 'nowrap',
  overflow: 'hidden',
});

export const SubTitle = styled('h3')({
  fontSize: "1.1rem",
  lineHeight: "1.3rem",
  textTransform: 'lowercase',
  padding: '0',
  paddingBottom: "0.25rem",
  margin: '0 0 0.5rem 0',
  borderBottom: "2px solid #888",
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
