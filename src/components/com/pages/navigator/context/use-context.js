import React, { useState, useEffect } from 'react';
import { InitialState } from './context';
import { useSelector } from 'react-redux'
import { useNavigatorReducer } from '../reducers'

export function useContext( config ){
	const [context, setContext] = useState( InitialState )
	const dataState = useSelector(( state ) => state[ config.automata.name ] ) 
	const [ state, dispatch ] = useNavigatorReducer()

	useEffect( ()=>{
		if(!dataState) return;
		if(!state) return;

		const data = {
			...context.data,
			timeline: dataState.data.timeline,				
			topic: dataState.data.topic,
		}

		setContext( { 
			...context, 
			isReady: true,
			data: data,
			state: state,
			dispatch: dispatch,
		})
	}, [ dataState?.data?.timeline, state ])

	return [ context ]
}