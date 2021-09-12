import React from 'react';
import numeral from 'numeral';

function NumberComponent({value}){
	value = (value) ? value : 0;
	const num = (value === '') ? '' : numeral(Number(value)).format('0a');
	return <span>{num.toUpperCase()}</span>
}

export default NumberComponent;