import React from 'react';
import CoreProxy from 'core/ui/layout/proxy';
import XS from "./layout-xs";
import MD from "./layout-md";

export default function Proxy( props ){
	return (
		<CoreProxy 
			xs={<XS {...props}/>}
			md={<MD {...props}/>}
		/>
	)
}	
