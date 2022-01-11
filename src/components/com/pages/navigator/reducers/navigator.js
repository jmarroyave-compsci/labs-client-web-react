import React, { useReducer } from 'react';

const InitialState = {
	initialized: false,
	parameters: {
		genre: "action",
		decade: 1980,
		page: 1,
		entity: "movies",		
		topic: null,
	},
}

function NavigatorReducer(state, action) {
	//console.log("NAVIGATOR", action.type, action.payload)
  switch (action.type) {
    case 'CHANGE_DECADE':
			return {
				...state,
				parameters: {
					...state.parameters,
					decade: action.payload,
					topic: null,
				}
			};
    case 'CHANGE_GENRE':
			return {
				...state,
				parameters: {
					...state.parameters,
					genre: action.payload,
					topic: null,
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
    default:
    	console.error("NavigatorReducer", "INVALID ACTION", action.type)
		return state;
  }
}


export function useNavigatorReducer(){
	const [ state, dispatch ] = useReducer(NavigatorReducer, InitialState);

	return [ state, dispatch ]
}