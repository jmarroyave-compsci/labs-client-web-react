import React from 'react'
import Icon from "@mui/material/Icon";
import Tooltip from '@mui/material/Tooltip';

function Help(props){
    return (
        <Tooltip title={props.text}>
          <Icon sx={{fontSize: "0.9rem"}}>{'help'}</Icon>
        </Tooltip>
    )
}

export default Help