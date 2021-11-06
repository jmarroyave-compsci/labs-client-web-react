import React, { useEffect, useState  } from 'react';
import config from './config';
import io from 'socket.io-client';

export const useWebSockets = () => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(config.SERVER);
    setSocket(newSocket);
    //console.log(newSocket)
    newSocket.on( 'message', ( msg ) => {
      console.log(msg)
    })

    return () => newSocket.close();
  }, [setSocket]);	


  return [ socket ]
}
