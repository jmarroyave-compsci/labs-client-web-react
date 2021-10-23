import React from 'react'

export default function SocialNetworks({size, links}) {
	switch(size){
		case "sm":
			size = "sm";
			break;
		default:
			size = "lg";
			break;
	}

	return (
	  <div className={`mod-social-icons ${size} layout-align-center-center layout-column flex`}>
	  	{Object.keys(links).map((item, key) =>
	  		links[item].enable &&
		    <a key={key} href={links[item].url}>
				<span className={`fa-stack fa-${size}`}>
					<i className="fa fa-square-o fa-stack-2x"></i>
					<i className={`fa fa-${links[item].icon} fa-stack-1x`} style={{color: links[item].color}}></i>
				</span>
			</a>
		)}
	  </div>
	);
}