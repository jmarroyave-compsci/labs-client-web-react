import React, { useState, useEffect } from 'react';
import { InitialState } from './context';
import { useSelector } from 'react-redux'
import { useNavigatorReducer } from '../reducers'
import { InitialState as InitialReducerState} from '../initial-state' 

export function useContext( config ){
	const dataState = useSelector(( state ) => state[ config.automata.name ] ) 
	const [context, setContext] = useState( InitialState )
	const [ state, dispatch ] = useNavigatorReducer( { ...InitialReducerState, ...( (dataState?.params?.entity) ? ({ parameters: dataState.params }) : ({}) ) } )

	useEffect( ()=>{
		if(!state) return;
		if(!dataState) return;

		const data = {
			timeline: dataState.data.timeline,				
			topic: dataState.data.topic,				
			results: dataState.data.results,				
		}

		setContext( { 
			...context, 
			data: data,
			isReady: true,
			state: state,
			dispatch: dispatch,
		})
	}, [ state, dataState ])

	useEffect( ()=>{
		if(!dataState) return;

		const data = {
			...context.data,
			topic: dataState.data.topic,				
		}

	}, [ dataState?.data?.topic ])

	useEffect( ()=>{
		if(!dataState) return;

		const data = {
			...context.data,
			timeline: dataState.data.timeline,				
		}

	}, [ dataState?.data?.timeline ])

	useEffect( ()=>{
		if(!dataState) return;

		const data = {
			...context.data,
			results: dataState.data.results,
		}

	}, [ dataState?.data?.results ])

	return [ context ]
}