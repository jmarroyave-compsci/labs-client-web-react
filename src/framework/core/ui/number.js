import React from 'react';
import PropTypes from 'prop-types';
import numeral from 'numeral';

function NumberComponent({value, format}){
	value = (value) ? value : 0;
	const num = (value === '') ? '' : numeral(Number(value)).format(format);
	return <span>{num.toUpperCase()}</span>
}

export default NumberComponent;

NumberComponent.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  format: PropTypes.oneOf(['0a', "0.0a", '0,0']),
};

NumberComponent.defaultProps = {
	format: "0a"
};


