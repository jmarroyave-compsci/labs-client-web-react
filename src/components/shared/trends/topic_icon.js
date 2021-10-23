import React from 'react';
import Image from 'core/ui/image';

const alias = {
	"c#" : "csharp",
	".net" : "dot-net",
	"asp.net" : "dot-net",
	"linq" : "dot-net",
	"html" : "html5",
	"css" : "css3",
}

function Icon({name, width, style}) {
  	const path = 'res/img/logos';
  	width = (width) ? width : "100%";
  	name = (alias[name]) ? alias[name] : name;

  	style = (style) ? style : {};
  	style.backgroundColor = "white";
  	
    return (
  		<Image width={width} notFound={`${path}/default.svg`} style={style} src={`${path}/${name}.svg`}/>
    );
}

export default Icon;