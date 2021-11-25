import React, { useReducer, useEffect, useState } from 'react';
import { Frame } from 'style/boxes'
import { SubTitle, Medium, Small, Notes } from 'style/detail'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ExpandIcon from '@mui/icons-material/ExpandLess';
import CollapseIcon from '@mui/icons-material/ExpandMore';

import Drawer from '@mui/material/Drawer';


export default function Parameters( props ){
  const { filters } = props;
  const [ expanded, setExpanded ] = useState(false);
  const anchor = "top";

  function onChange( params ){
    if( props.onChange ) props.onChange( params )
    openDrawer(false);
  }

  const openDrawer = (open) => {
    setExpanded(open)
  };

  return (
    <>
      <Button onClick={ () => openDrawer(!expanded) } endIcon={(expanded) ? <ExpandIcon/> : <CollapseIcon/>}>Filter</Button>

      <Drawer
        anchor={anchor}
        open={expanded}
        onClose={() => openDrawer(false)}
      >
        <Box sx={{ padding: '2rem 2rem 0rem 2rem', backgroundColor: "background.paper"}}>
        { filters({ onChange : onChange }) }
        </Box>
      </Drawer>
    </>
  )
}