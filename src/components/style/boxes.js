import React from 'react'
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Paper from 'com/ui/paper';

export const Frame = styled('div')({
  margin: "0 0 2rem 0",
  padding: 0,
  width: '100%',
});

const _ItemFrame = styled('div')({
  padding: "0",
  margin: "0 1rem 1rem 0",
  display: 'flex', 
  flexGrow: 1,
  overflow: 'hidden',
});

const _Item = styled('div')({
  display: 'flex', 
  flexGrow: 1,
});

export const Item = ( props ) =>{
  const paper = (props.paper) ? props.paper : true;
  var item = <_Item {...props}/>

  if(paper){
    item = (
      <Paper sx={{ display: 'flex', flexGrow: 1, margin: "0.1rem"}}>
        {item}          
      </Paper>
    ) 

  }
  return (
    <_ItemFrame>
      {item}
    </_ItemFrame>
    )
}

Item.propTypes = {
  paper: PropTypes.bool,
}


export const FrameSkeleton = styled('div')({
  padding: "0rem 0rem 4rem 0rem",
});


