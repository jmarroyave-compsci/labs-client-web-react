import React from 'react';
import PropTypes from 'prop-types';
import { format as formatter, formatDistance } from 'date-fns'

class CoreDate extends React.Component { 
  getDate(value){
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

  toString(lang, date, format){
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

  render() {
    var  { lang, value, className, format } = this.props;
    lang = (lang) ? lang : "en";
    format = (format) ? format : "ago";

    const date = this.getDate(value);
    if(date == null) return <span/>

    const str = this.toString(lang, date, format);

    return (
      <span className={className}>{str}</span>
    );
  }
}


export default CoreDate;