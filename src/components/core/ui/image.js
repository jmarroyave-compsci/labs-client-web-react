import React from 'react';
import LazyLoad from 'react-lazyload';
import { styled } from '@mui/material/styles';
import config from 'app/config'

const IMAGE_PLACEHOLDER = `${config.APP.BASE_PATH}${config.DEFAULTS.IMAGE_PLACEHOLDER}`;
const onMediaFallback = event => event.target.src = IMAGE_PLACEHOLDER;

const ImgPanel = styled('div')({
	position: 'relative',
	overflow: 'hidden',
	backgroundColor: '#efefef', 
	backgroundImage: `url('${IMAGE_PLACEHOLDER}')`, 
	backgroundPosition: 'center center',
	width: 'fit-content',
	height: 'fit-content',
	padding: 0,
	margin: 0,
});

const Image = ( props ) => {
	var {src, lazy, preload, width, height, style, layout} = props;

	src = (src?.startsWith("/")) ? `${config.APP.BASE_PATH}${src}` : src;

	width = ( width ) ? width : "100%";
	height = ( height ) ? height : null

	var img = <img 
		src={src}  
		layout={layout} 
		width={width} 
		height={height} 
		onError={onMediaFallback}
	/>

	if(lazy){
		img = <LazyLoad only>{img}</LazyLoad>;
	}

	return (
	    <ImgPanel>
	        {img}
	    </ImgPanel>    
	)
}

export default Image;
