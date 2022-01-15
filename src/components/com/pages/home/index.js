import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setPage } from 'app';
import V2 from './com/v2'
import V3 from './com/v3'

const Content = ( props ) => {
	const appState = useSelector(( state ) => state.app )
	const dispatch = useDispatch();

	useEffect( () => {
		dispatch(setPage({
		  	breadcrumbs: ( appState.theme.newVersion ) ? false : props.breadcrumbs,
		}));
	}, [])

	if(!appState) return null;

	return ( appState.theme.newVersion ) ? <V3 {...props}/> : <V2 {...props}/>
}


export default Content