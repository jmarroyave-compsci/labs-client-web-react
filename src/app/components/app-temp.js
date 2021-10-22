import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { setPage } from 'app/state' 

const AppTemp = ( props ) =>{
  const dispatcher = useDispatch();

  useEffect( () => {

    dispatcher(setPage({
      breadcrumbs: props.breadcrumbs,
    }));    

  }, [])

  return props.children
}

export default AppTemp;