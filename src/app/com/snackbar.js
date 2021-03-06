import React, { useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { showMessage } from 'app' 

import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import Snackbar from '@mui/material/Snackbar';

const _Snackbar = ( props ) => {
  const dispatch = useDispatch();
  var state = useSelector(( state ) => state['app'] ) 

  if(!state) return;

  const handleCloseSnackbar = () => {
    dispatch( showMessage( { message : ""} ) )
  }

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={ handleCloseSnackbar }
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <>
      <Snackbar
        open={ state.messages.show }
        autoHideDuration={ state.messages.duration }
        onClose={ handleCloseSnackbar }
        message={ state.messages.message }
        action={ action }
      />
    </>
  );
}


export default _Snackbar;