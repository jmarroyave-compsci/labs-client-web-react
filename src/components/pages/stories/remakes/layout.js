import React from 'react';
import CoreProxy from 'core/ui/layout/proxy';
import XS from "./layout-xs";
import { useSelector } from 'react-redux'

export default function Proxy( props ){
  	const page = useSelector(( state ) => state.stories_remakes )
	return (
		<CoreProxy 
			xs={<XS {...props} {...page}/>}
		/>
	)
}	
