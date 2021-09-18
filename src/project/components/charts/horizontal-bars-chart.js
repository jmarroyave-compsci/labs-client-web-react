import React, { Component } from 'react';
import treemapMapAdapter from "components/data/horizontal-bars-chart-adapter"
import _HB from "core/ui/charts/horizontal-bars-chart";

class HB extends Component {
  render() {
    return (
      <div>
        <_HB {...this.props}/>
      </div>
    )
  }
}

export default treemapMapAdapter(HB)