import React from 'react'
import { styled } from '@mui/material/styles';

export const Buttons = styled('div')({
  padding: 0,
  margin: '0 0 0.5rem 0',
});

export const Button = styled('span')({
  padding: 0,
  margin: '0 0.25rem 0 0',
  backgroundColor: 'white',
  borderRadius: '5px',
});

export default function SocialNetworks({size, links}) {
	switch(size){
		case "sm":
			size = "sm";
			break;
		case "lg":
			size = "lg";
			break;
		default:
			size = "lg";
			break;
	}

	return (
	  <Buttons>
	  	{Object.keys(links).map((item, key) =>
	  		links[item].enable &&
		    <a key={key} href={links[item].url}>
				<Button className={`fa-stack fa-${size}`}>
					<i className="fa fa-square-o fa-stack-2x"></i>
					<i className={`fa fa-${links[item].icon} fa-stack-1x`} style={{color: links[item].color}}></i>					
				</Button>
			</a>
		)}
	  </Buttons>
	);
}