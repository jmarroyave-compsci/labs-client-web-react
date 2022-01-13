import React, { useEffect, useState, useRef } from 'react'
import Proxy from 'core/ui/layout/proxy';
import XS from './xs'
import MD from './md'

const LayoutProxy = ( props ) => {
    const ref = useRef();
    const [ height, setHeight ]  = useState(null)
    const [ offset, setOffset ]  = useState(null)

    useEffect( ()=> {
      const div = ref.current
      //console.log(div, div.offsetTop, screen.height)
      setHeight(screen.height)
      setOffset(div.offsetTop)
    }, [screen.height])

	return (
		<div ref={ref}>
		<Proxy 
			xs={<XS height={height - 80} offset={offset}/>}
			md={<MD height={height - 60} offset={offset}/>}
		/>
		</div>
	) 
}


export default LayoutProxy