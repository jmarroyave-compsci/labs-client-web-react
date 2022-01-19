import React, { useEffect, useState, useRef } from 'react'
import Proxy from 'core/ui/layout/proxy';
import XS from './xs'
import MD from './md'
import useWindowDimensions from '../../hooks/use-window-dimensions'

const LayoutProxy = ( props ) => {
  	var { height, width } = useWindowDimensions();
    const ref = useRef();
    const [ offset, setOffset ]  = useState(null)
    const minHeight = 400

    height = (height < minHeight) ? minHeight : height  

    useEffect( ()=> {
      const div = ref.current
      setOffset(div.offsetTop)
    }, [height])  	

	return (
		<div ref={ref}>
		{ height != null && offset != null &&
			<Proxy 
				xs={<XS height={height - 125} offset={offset}/>}
				md={<MD height={height - 80} offset={offset}/>}
			/>
		}
		</div>
	) 
}


export default LayoutProxy