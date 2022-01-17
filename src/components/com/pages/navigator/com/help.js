import React, { useState } from 'react'
import Icon from "@mui/material/Icon";
import Tooltip from '@mui/material/Tooltip';
import ClickAwayListener from '@mui/material/ClickAwayListener';

function Help(props){
    const [ shown, setShown ] = useState(false)
    return (
        <ClickAwayListener onClickAway={() => setShown(false)}>
            <Tooltip 
                title={props.text}
                onClose={()=>setShown(false)}
                disableHoverListener
                disableTouchListener
                open={shown}
            >        
              <Icon sx={{fontSize: "0.9rem"}} onClick={()=> setShown(!shown)} >{'help'}</Icon>
            </Tooltip>
        </ClickAwayListener>
    )
}

export default Help