import React from 'react';

export const InitialState = {
	isReady: false, 
	data : null,
	state: null,
	dispatch: null,
}

export const ComponentContext = React.createContext(InitialState)