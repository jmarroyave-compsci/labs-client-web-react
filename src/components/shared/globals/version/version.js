import React from 'react';
import { styled } from '@mui/material/styles';

export const Text = styled('span')({
	fontSize: '0.75rem',
});


export default function Version({version}){
	return (
		<Text>{version}</Text>
	)	
}