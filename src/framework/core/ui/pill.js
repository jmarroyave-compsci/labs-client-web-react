import React from 'react';
import styled, { css } from 'styled-components'
import MDChip from '@material-ui/core/Chip';

export default function Pill({text, onClick}) {
	
    return (
    	<Container>
        	<MDChip variant={'outlined'} size={'small'} label={text} onClick={onClick}/>
    	</Container>
    );
}

Pill.defaultProps = {
  onClick : null,
  text: "",
};


const Container = styled.div`
	display: inline-block;
	margin: 0;
	margin-right: 0.25rem;
	margin-bottom: 0.25rem;
`;

