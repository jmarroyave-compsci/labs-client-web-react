import React, { Component } from 'react';
import treemapMapAdapter from "..//data/horizontal-bars-chart-adapter"
import _HB from "core/ui/charts/horizontal-bars-chart";

class HB extends Component {
  render() {
    return (
      <_HB {...this.props}/>
    )
  }
}

export default treemapMapAdapter(HB)