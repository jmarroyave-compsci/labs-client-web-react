import React, { useReducer, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import GoogleIcon from '@mui/icons-material/Google';
import CloseIcon from '@mui/icons-material/Close';

import { showMessage, logIn, logOut, setLoading } from 'app' 

import { firebaseAuth, googleProvider } from 'app/config/providers/google-firebase/auth';

const initialState = {
  loggedIn : false,
  loggingIn : false,
}

function reducer(state, action){
  switch( action.type ){
    case "LOGING_IN":
      return {
        ...state,
        loggingIn : true,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        loggingIn : false,
        loggedIn: true,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        loggingIn : false,
        loggedIn: false,
      };
    case "LOGOUT":
      return {
        ...state,
        loggingIn : false,
        loggedIn: false,
      };
    case "INIT":
      return {
        ...state,
        loggingIn : false,
        loggedIn: action.payload.loggedIn,
      };
    default:
      throw new Error(`operation ${ action.type?.toUpperCase() } not implemented`)      
  }
}

const User = ( props ) => {
  const appState = useSelector(( state ) => state['app'] )
  const appDispatch = useDispatch();
  const [ state, dispatch ] = useReducer( reducer, initialState ) 

  const clickLoggingIn = () => {
    dispatch({ type: "LOGING_IN" })
    appDispatch( setLoading( { status: true, sender: "login" } ) )
  }

  const onLoginSuccess = ( user ) => {
    appDispatch( logIn( { avatar: user.photoURL, name: user.displayName } ) )
    dispatch({ type: "LOGIN_SUCCESS", payload : { user : user } }) 
    appDispatch( setLoading( { status: false, sender: "login" } ) )
  }

  const onLoginFailure = ( error ) => {
    appDispatch( logOut( ) )
    dispatch({ type: "LOGIN_FAILURE", payload: {} }) 
    const err = { errMessage : `Error while trying to login`, tech: error.message }
    appDispatch( showMessage( { message: err.errMessage } )  )
    appDispatch( setLoading( { status: false, sender: "login" } ) )
  }

  const onLogout = () => {
    appDispatch( logOut( ) )
    dispatch({ type: "LOGOUT" }) 
  }

  useEffect( ()=>{
    if(!appState.credentials) return;
    //console.log("user", appState.credentials)
    dispatch( { type: "INIT", payload: { loggedIn: appState.credentials.loggedIn } } )
  }, [appState.credentials])

  return (
    <>
      {state.loggedIn && 
        <Avatar alt={appState.credentials.user.name} src={appState.credentials.user.avatar} />
      }
      {!state.loggedIn &&
        <Button
          onClick={ clickLoggingIn }
        >
          Log in
        </Button>
      }
      {!state.loggedIn && state.loggingIn && <UserLogin onSuccess={ onLoginSuccess } onFailure={ onLoginFailure }/>}
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