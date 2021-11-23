import numeral from 'numeral';
import jsConvert from "js-convert-case";
import { format as dateFormatter, formatDistance as dateFormatDistance } from 'date-fns'

export const number = function(value=0, format="0a"){
	return numeral(Number(value)).format(format);
}

export const date = function(value, format=""){
  const getDate = (value) => {
    var date;

    if(!value || value == null || value === '' || value.length == 0) return null;
    if(value instanceof Date) return value;

    try{
      const num = Number(value);
      if(Number.isInteger(num)){
        return new Date(num);
      } else {
        return new Date(value);
      }
    } catch (ex){
      return null;
    }
  }

  const toString = (date, format) => {
    switch(format){
      case "ago":
        return formatDistance(date, new Date())
      case "DD/MM/YYYY":
        return formatter(date, 'dd/MM/yyyy');
      case "YYYY":
        return date.getFullYear()
      default:
        return formatter(date, format);
    }
  }

  value = getDate(value);
  return toString(value, format)
}


export const stringToText = function(value=""){
	return jsConvert.toSentenceCase(value)
}

export const stringToHeader = function(value=""){
  return jsConvert.toHeaderCase(value)
}
