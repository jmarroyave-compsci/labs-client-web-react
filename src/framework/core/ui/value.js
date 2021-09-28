import React from 'react';

export default function Value(props){
	const { label, value } = props;
	return (
		<div>
			{label && <span style={{fontWeight:'bold'}}>{label}:</span>}
			<span>{value}</span>
		</div>
	)
}

