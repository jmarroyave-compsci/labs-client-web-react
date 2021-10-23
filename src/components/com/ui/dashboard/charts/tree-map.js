import React, { Component } from 'react';
import treemapMapAdapter from "..//data/tree-map-adapter"
import _TreeMap from "core/ui/charts/tree_map";

class TreeMap extends Component {
  render() {
    return (
      <div>
        <_TreeMap {...this.props}/>
      </div>
    )
  }
}

export default treemapMapAdapter(TreeMap)
