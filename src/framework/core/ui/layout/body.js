import React from 'react';
import Stack from '@mui/material/Stack';

export default function Body( props ){
	return (
		<Stack sx={{padding: { sm: '0rem 2rem 3rem 2rem', lg: '0rem 4rem 3rem 4rem'}}}>
			{props.children}
		</Stack>
	) 
} 

