import React from 'react';
import { styled } from '@mui/material/styles';
import MDChip from '@material-ui/core/Chip';

export default function Pill({text, color, variant, onClick}) {
	
    return (
    	<Container>
        	<MDChip variant={variant} color={color} size={'small'} label={text} onClick={onClick}/>
    	</Container>
    );
}

Pill.defaultProps = {
  onClick : null,
  text: "",
  color: 'primary',
  variant: 'default'
};


const Container = styled('div')({
	display: 'inline-block',
	margin: '0',
	marginRight: '0.25rem',
	marginBottom: '0.25rem',
});

