import React, { useReducer } from 'react';
import { styled } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

import { firebaseAuth, googleProvider } from 'app/config/providers/google-firebase/auth';

const initialState = {
  logedIn : false,
  logingIn : false,
}

function reducer(state, action){
  switch( action.type ){
    case "LOGING_IN":
      return {
        ...state,
        logingIn : true,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        logingIn : false,
        logedIn: true,
        user: action.payload.user,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        logingIn : false,
        logedIn: false,
      };
    default:
      throw new Error(`operation ${ action.type?.toUpperCase() } not implemented`)      
  }
}


const User = ( props ) => {
  const [ state, dispatch ] = useReducer( reducer, initialState ) 

  const clickLogingIn = () => {
    dispatch({ type: "LOGING_IN" })
  }

  const onLoginSuccess = ( user ) => {
    dispatch({ type: "LOGIN_SUCCESS", payload : { user : user } }) 
  }

  const onLoginFailure = () => {
    dispatch({ type: "LOGIN_FAILURE" }) 
  }

  return (
    <>
      {state.logedIn && 
        <Avatar alt={state.user.displayName} src={state.user.photoURL} />
      }
      {!state.logedIn &&
        <Button
          onClick={ clickLogingIn }
        >
          Log in
        </Button>
      }
      {!state.logedIn && state.logingIn && <UserLogin onSuccess={ onLoginSuccess } onFailure={ onLoginFailure }/>}
    </>
  );
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const UserLogin = ( props ) => {
  const onSuccess = ( user ) => {
    props.onSuccess(user);
  }

  const onFailure = (  ) => {
    props.onFailure();
  }

  const clickGoogle = async () => {
    const res = await firebaseAuth( googleProvider )
    onSuccess( res )
  }

  return (
    <Modal
      open={true}
      onClose={onFailure}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box style={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Button onClick={ clickGoogle }>Google</Button>
          </Typography>              
      </Box>
    </Modal>    
  )
}

export default User;