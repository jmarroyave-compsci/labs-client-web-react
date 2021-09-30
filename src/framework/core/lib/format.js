import numeral from 'numeral';
import jsConvert from "js-convert-case";

export const number = function(value=0, format="0a"){
	return numeral(Number(value)).format(format);
}

export const stringToText = function(value=""){
	return jsConvert.toSentenceCase(value)
}