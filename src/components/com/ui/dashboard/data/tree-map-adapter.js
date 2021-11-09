import React, { Component } from 'react'
import * as format from 'core/lib/format' 

export default ChartComponent => (
  class TreeMapAdapter extends Component {

    renderChart(data) {
      return (
        <ChartComponent {...this.props} data={data} />
      )
    }

    render() {
      const { data, ranges, title }  = this.props;
      var _data = null;

      if (data && data.length > 0){
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