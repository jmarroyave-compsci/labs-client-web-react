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
	backgroundRepeat: 'no-repeat', 
	backgroundPosition: 'center center',
	width: 'fit-content',
	height: 'fit-content',
});

const Image = ( props ) => {
	var {src, lazy, preload, width, height, style, layout} = props;

	src = (src?.startsWith("/")) ? `${config.APP.BASE_PATH}${src}` : src;

	if(height == '' && width == ''){
	  width = '100%';
	}

	var img = <img 
		src={src}  
		layout={layout} 
		width={width} 
		height={height} 
		style={{...style, position: 'absolute', top: 0, left: 0, margin: '0px', padding: '0px', border: '0px'}}
		onError={onMediaFallback}
	/>

	if(lazy){
		img = <LazyLoad only>{img}</LazyLoad>;
	}

	return (
	    <ImgPanel>
	        <img src={preload} width={width} height={height} style={{opacity: '1', margin: '0px', padding: '0px', border: '0px'}}/>
	        {img}
	    </ImgPanel>    
	)
}

export default Image;
