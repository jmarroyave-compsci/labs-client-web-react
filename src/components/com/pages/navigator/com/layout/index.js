import React, { useEffect, useState, useRef } from 'react'
import Proxy from 'core/ui/layout/proxy';
import XS from './xs'
import MD from './md'
import useWindowDimensions from '../../hooks/use-window-dimensions'
import { useTheme } from "@mui/material/styles";

const LayoutProxy = ( props ) => {
  	const theme = useTheme();
  	const { height, width } = useWindowDimensions();
    const ref = useRef();
    const [ offset, setOffset ]  = useState(null)

    useEffect( ()=> {
      const div = ref.current
      setOffset(div.offsetTop)
    }, [height])  	

	return (
		<div ref={ref} style={{backgroundColor: (theme.palette.mode == "light") ? "#f8f8f8" : 'inherit' }}>
		{ height != null && offset != null &&
			<Proxy 
				xs={<XS height={height - 84 - 32} offset={offset}/>}
				md={<MD height={height - 84 - 32} offset={offset}/>}
			/>
		}
		</div>
	) 
}


export default LayoutProxy