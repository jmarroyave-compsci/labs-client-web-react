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
	  	{links.map((item, key) =>
	  		item.enable &&
		    <a key={key} href={item.url}>
				<span className={`fa-stack fa-${size}`}>
					<i className="fa fa-square-o fa-stack-2x"></i>
					<i className={`fa fa-${item.icon} fa-stack-1x`} style={{color: item.color}}></i>
				</span>
			</a>
		)}
	  </div>
	);
}