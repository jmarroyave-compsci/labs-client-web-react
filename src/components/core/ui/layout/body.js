import React from 'react';
import Stack from 'com/ui/stack';

export default function Body( props ){
	const { noPadding } = props;
	return (
		<Stack sx={{
			padding: (noPadding) ? {} : { xs: '0rem 2rem 3rem 2rem', sm: '0rem 2rem 3rem 2rem', lg: '0rem 4rem 3rem 4rem'},
			fontSize: '1rem',
			}}
		>
			{props.children}
		</Stack>
	) 
} 

