import React, { useReducer } from 'react';
import { styled } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import GoogleIcon from '@mui/icons-material/Google';
import CloseIcon from '@mui/icons-material/Close';

import { useDispatch } from 'react-redux'
import { showMessage } from 'app' 

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
  const appDispatch = useDispatch();
  const [ state, dispatch ] = useReducer( reducer, initialState ) 

  const clickLogingIn = () => {
    dispatch({ type: "LOGING_IN" })
  }

  const onLoginSuccess = ( user ) => {
    dispatch({ type: "LOGIN_SUCCESS", payload : { user : user } }) 
  }

  const onLoginFailure = ( error ) => {
    //console.log("error in login", error.message )
    dispatch({ type: "LOGIN_FAILURE", payload: {} }) 
    const err = { errMessage : `Error while trying to login`, tech: error.message }
    appDispatch( showMessage( { message: err.errMessage } )  )
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
  width: '100%',
  maxWidth: 250,
};

const UserLogin = ( props ) => {
  const onSuccess = ( user ) => {
    props.onSuccess(user);
  }

  const onFailure = ( error ) => {
    props.onFailure( error );
  }

  const authenticate = async ( provider ) => {
    try{
      const res = await firebaseAuth( provider )
      if( res.error ){
        onFailure( res.error )  
      } else {
        onSuccess( res )  
      }
    }catch(ex){
      onFailure(ex)
    }    
  }

  const clickGoogle = async () => {
    authenticate( googleProvider )
  }

  return (
    <Modal
      open={true}
      onClose={onFailure}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box style={style}>
        <Paper style={{ padding: '1rem'}}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Log In
          </Typography>
          <br/>
          <center>
            <Button startIcon={<GoogleIcon/>} variant="contained" color="primary" size="large" onClick={ clickGoogle }>Google</Button>
          </center>
        </Paper>
      </Box>
    </Modal>    
  )
}

export default User;