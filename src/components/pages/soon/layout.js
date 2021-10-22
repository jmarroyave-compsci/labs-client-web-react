import React from 'react';
import CoreProxy from 'core/ui/layout/proxy';
import XS from "./layout-xs";

export default function ProxySoon( props ){
	return (
		<CoreProxy 
			xs={<XS {...props}/>}
		/>
	)
}	
