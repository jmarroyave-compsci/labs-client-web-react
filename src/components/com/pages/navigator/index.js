import React from 'react';
import config from "./.config.js";
import { ComponentContext, useContext } from './context';
import { useData } from './data'
import LayoutProxy from './com/layout';
import { Loading } from './com';

const Layout = ( props ) => {
	const [ context ] = useContext( config );
	const [ data ] = useData( context );

	if(!context.isReady) return <Loading/>

	//console.log("navigator", context)

	return (
		<ComponentContext.Provider value={context}>
			<LayoutProxy/>
		</ComponentContext.Provider>
	)
}


export default Layout