import React from 'react';
import Constants from 'config/constants'
import Version from 'shared/globals/version';

export default function Footer({}) {
	return (
		<div style={{textAlign: 'center'}}>
		  <Version version={Constants.VERSION}/>
		</div>
	)
}