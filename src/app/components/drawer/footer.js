import React from 'react';
import Constants from 'config/constants'
import Version from 'shared/globals/version';

export default function({}){
	return (
		<div style={{textAlign: 'center'}}>
		  <Version version={Constants.VERSION}/>
		</div>
	)
}