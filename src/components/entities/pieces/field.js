import React from 'react'
import { FieldLabel, FieldValue } from 'components/styles/detail'
import Date from 'core/ui/date';

function Field( props ){
   var { data, value, title, format, sufix } = props
   data = (data) ? data : value;

    if( !data || data == null || data.length == 0 ) return null;

    var value = data;
    switch( format ){
        case "date":
          value = <Date value={data} format="DD/MM/YYYY"/>

    }

    console.log(data)


    return (
      <div>
        <FieldLabel>{title}</FieldLabel>
        <FieldValue>{value} {sufix}</FieldValue>
      </div>
    )
}

export default Field;


