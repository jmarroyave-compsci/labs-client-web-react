import React from 'react';
import Image from 'next/image';

class Img extends React.Component{
	render(){
		var {src, width, height, style, notFound, layout} = this.props;
		var imgProps = {};
		if(notFound){
			imgProps.ref = (img => this.img = img);
			imgProps.onError = (()=> (notFound && this.img.src != notFound) ? this.img.src = notFound : null);
		}
  		return <Image layout={layout} {...imgProps} style={style} width={width} height={height} src={src}/>
  	}
}

export default Img;