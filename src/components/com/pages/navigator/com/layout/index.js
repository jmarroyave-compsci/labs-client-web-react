import React from 'react';
import Proxy from 'core/ui/layout/proxy';
import XS from './xs'
import MD from './md'

const LayoutProxy = ( props ) => {
	return (
		<Proxy 
			xs={<XS/>}
			md={<MD/>}
		/>
	) 
}


export default LayoutProxy