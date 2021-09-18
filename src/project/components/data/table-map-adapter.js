import React, { Component } from 'react'

export default TableComponent => (
  class TableMapAdapter extends Component {
    parseMapToData( title, data, ranges ){
      if(!data) return null
      if(!ranges) ranges = [];
      const labelField = "label"

      var resp = [];
      var others = {};
      Object.keys(data).forEach( c => {
        var value = data[c];
        var obj = { label: (c.startsWith("_") ? c.substring(1) : c ) , value: value };
        for( var i = 0; i < ranges.length; i++){
          var range = ranges[i];
          if( value > range ) continue;
          if( !others[range] ) others[range] = { label: `${(i === 0) ? 1 : ranges[i - 1] + 1}-${range}`, value: 0, children: [] };
          others[range].value += obj.value;
          return;
        }
        resp.push( obj )
      })

      Object.keys(others).forEach( k => {
        resp.push ( others[k] )  
      })
      
      var resp2  = [];
      resp.forEach( d => {
        resp2.push([d.label.toString(), d.value.toString()]);
      })

      return { head: ["label", "value"], data: resp2}
    } 

    renderChart(data) {
      return (
        <TableComponent {...this.props} tableHead={(data) ? data.head : null} tableData={(data) ? data.data : null} />
      )
    }

    render() {
      const { data, ranges, title }  = this.props;
      var _data = null;

      if (data){
        _data = this.parseMapToData(title, data, ranges);
      }

      return (
        <div>
          {this.renderChart(_data)}
        </div>
      )
    }
  }
)