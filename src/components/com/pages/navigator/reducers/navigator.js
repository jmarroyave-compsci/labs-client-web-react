import React, { useReducer } from 'react';
import { InitialState } from '../initial-state' 

function NavigatorReducer(state, action) {
	//console.log("NAVIGATOR", action.type, action.payload)
  switch (action.type) {
    case 'CHANGE_DECADE':
			return (action.payload == state.parameters.decade) ? state : {
				...state,
				parameters: {
					...state.parameters,
					decade: action.payload,
				}
			};
    case 'CHANGE_GENRE':
			return (action.payload == state.parameters.genre) ? state : {
				...state,
				parameters: {
					...state.parameters,
					genre: action.payload,
				}
			};
    case 'SELECT_TOPIC':
			return {
				...state,
				parameters: {
					...state.parameters,
					topic: action.payload,
				}
			};
    case 'CHANGE_RESULTS_PAGE':
			return {
				...state,
				parameters: {
					...state.parameters,
					page: action.payload,
				}
			};
    case 'UI_TIMELINE':
			return {
				...state,
				ui : {
					...state.ui,
					page: "TIMELINE",
				}
			};
    case 'UI_HISTORY':
			return {
				...state,
				ui : {
					...state.ui,
					page: "HISTORY",
				}
			};
    case 'UI_RESULTS':
			return {
				...state,
				ui : {
					...state.ui,
					page: "RESULTS",
				}
			};
    case 'UI_TOPIC':
			return {
				...state,
				ui : {
					...state.ui,
					page: "TOPIC",
				}
			};
    default:
    	console.error("NavigatorReducer", "INVALID ACTION", action.type)
		return state;
  }
}


export function useNavigatorReducer(){
	const [ state, dispatch ] = useReducer(NavigatorReducer, InitialState);

	return [ state, dispatch ]
}