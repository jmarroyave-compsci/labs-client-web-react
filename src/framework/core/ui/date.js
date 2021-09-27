import React from 'react';
import PropTypes from 'prop-types';
import { format, formatDistance } from 'date-fns'

class CoreDate extends React.Component { 
  getDate(value){
    var date;
    try{
      if(!value || value == null || value === '' || value.length == 0){
        return new Date();
      }

      if(value instanceof Date){
        return new Date(value);
      } 

      const num = Number(value);
      if(Number.isInteger(num)){
        return new Date(num);
      } else {
        return new Date(value);
      }
    } catch (ex){
      return new Date();
    }
  }

  _format(lang, date, formatString){
    switch(formatString){
      case "ago":
        return formatDistance(date, new Date())
      case "DD/MM/YYYY":
        return format(date, 'dd/MM/yy');
      default:
        return format(date, formatString);
    }
  }

  render() {
    var  { lang, value, className } = this.props;
    lang = (lang) ? lang : "en";
    const formatString = (this.props.format) ? this.props.format : "ago";

    const date = this.getDate(value);
    const str = this._format(lang, date, formatString);
    return (
      <span className={className}>{str}</span>
    );
  }
}


export default CoreDate;