import React, { Component } from 'react'

export default TableComponent => (
  class TableMapAdapter extends Component {
    parseMapToData( title, data ){
      if(!data) return null
      var resp = [];
      Object.keys(data).forEach( c => {
        var value = data[c].toString();
        var label = c.startsWith("_") ? c.substring(1) : c;

        resp.push( [label, value] );
      })
      
      resp = resp.sort( (a,b) => (Number(a[1]) > Number(b[1])) ? -1 : 1 )
      return { head: ["label", "value"], data: resp}
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