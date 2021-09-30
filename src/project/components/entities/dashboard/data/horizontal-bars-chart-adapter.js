import React, { Component } from 'react'
import * as format from 'core/lib/format' 

export default ChartComponent => (
  class TreeMapAdapter extends Component {
    parseMapToData( title, data, ranges ){
      if(!data) return null
      if(!ranges) ranges = [];
      const labelField = "label"

      var resp = [];
      var others = {};
      Object.keys(data).forEach( c => {
        var value = data[c];
        var obj = { label: format.stringToText(c.startsWith("_") ? c.substring(1) : c ) , value: value };
        for( var i = 0; i < ranges.length; i++){
          var range = ranges[i];
          if( value > range ) continue;
          if( !others[range] ) others[range] = { label: `< ${format.number(range)}`, value: 0, children: [] };
          others[range].value += obj.value;
          return;
        }
        resp.push( obj )
      })

      Object.keys(others).forEach( k => {
        resp.push ( others[k] )  
      })
      
      return resp;
    }

    renderChart(data) {
      return (
        <ChartComponent {...this.props} data={data} />
      )
    }

    render() {
      const { data, ranges, title }  = this.props;
      var _data = null;

      if (data){
        _data = this.parseMapToData(title, data, ranges);
      }

      return (
          this.renderChart(_data)
      )
    }
  }
)