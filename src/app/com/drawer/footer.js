import React from 'react';
import config from 'app/config'
import Version from 'shared/globals/version';

export default function Footer({}) {
	return (
		<div style={{textAlign: 'center'}}>
		  <Version version={config.VERSION}/>
		</div>
	)
}