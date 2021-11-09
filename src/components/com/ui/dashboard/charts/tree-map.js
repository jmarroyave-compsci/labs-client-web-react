import React, { useMemo } from 'react';
import _TreeMap from "core/ui/charts/tree_map";

export default function TreeMap( props ) {
    const { data, ranges, title } = props;

    const parseMapToData = ( title, data, ranges ) => {
      if(!data || data.length == 0) return null
      if(!ranges) ranges = [];
      var resp = [];
      var others = {};
      Object.keys(data).forEach( c => {
        var value = data[c];
        var obj = { name: format.stringToText(c.startsWith("_") ? c.substring(1) : c ) , value: value };
        for( var i = 0; i < ranges.length; i++){
          var range = ranges[i];
          if( value > range ) continue;
          if( !others[range] ) others[range] = { name: `< ${format.number(range)}`, value: 0, children: [] };
          others[range].children.push( obj );
          return;
        }
        resp.push( obj )
      })

      Object.keys(others).forEach( k => {
        resp.push ( others[k] )  
      })
      
      return { name: title, children: resp };
    }

    var _data = null;
    if(data && data.length > 0){
      _data = useMemo(() => {
        return parseMapToData(title, data, ranges);
      }, [ title, data, ranges] )
    }


    return (
      <div>
        <_TreeMap {...this.props} data={_data}/>
      </div>
    )
}
