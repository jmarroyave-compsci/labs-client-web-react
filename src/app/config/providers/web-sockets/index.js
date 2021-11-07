import React, { useEffect, useState  } from 'react';
import config from './config';
import io from 'socket.io-client';
import { updateUsers } from 'app';

export const initializeWebSockets = ( dispatch ) => {
  const socket = io(config.SERVER);
  socket.on( 'message', ( msg ) => {
    var data = JSON.parse(msg);
    dispatch( updateUsers( { users : data.users } ) )
  })
  return [ socket ]
}
