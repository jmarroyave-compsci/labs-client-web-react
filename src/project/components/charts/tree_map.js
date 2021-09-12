import React from 'react';
import PropTypes from 'prop-types';
import { default as RDTreeMap }  from "react-d3-treemap";
import "react-d3-treemap/dist/react.d3.treemap.css";
import convertCase from 'js-convert-case';

class TreeMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 100,
      data: {},
      dataRef: null,
    };

    this.ref = React.createRef();
  }

  componentDidUpdate(){
    var width = this.ref.current ? this.ref.current.offsetWidth : this.state.width;

    if( width !== this.state.width){
      this.setState({width: width})  
    }

    var data = this.props.data;
    if( JSON.stringify(this.props.data) !== JSON.stringify(this.state.dataRef) ){
      this.setState({data: this.parseMapToData(this.props.title, data), dataRef: data})
    }
  }


  render() {
    const { loading, error, title } = this.props;
    const { data, width } = this.state;

    if (loading || !data.children ) return <p>Loading...</p>;
    if (error) return <p>Error { error.toString() }</p>;
    if (!data) return <p>no data</p>

    return <div id="___" ref={this.ref}>
        <RDTreeMap  
          id="myTreeMap"
          width={width}
          height={(width * 0.5).toFixed(0)}
          data={data}
          levelsToDisplay={1}
          nodeStyle={{ paddingLeft: 5, paddingRight: 5 }}
        />
      </div>;
  }

  parseMapToData( title, data ){
    if(!data) return null

    var resp = [];
    var ranges = [ 10, 25, 100 ]
    var others = {};
    Object.keys(data).forEach( c => {
      var value = data[c];
      var obj = { name: (c.startsWith("_") ? c.substring(1) : convertCase.toHeaderCase(c) ) , value: value };
      for( var i = 0; i < ranges.length; i++){
        var range = ranges[i];
        if( value > range ) continue;
        if( !others[range] ) others[range] = { name: `${(i === 0) ? 1 : ranges[i - 1] + 1}-${range}`, value: 0, children: [] };
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

}


TreeMap.propTypes = {
  data: PropTypes.object,
  title: PropTypes.string,
};

TreeMap.defaultProps = {
  data: {},
  title: "title",
};


export default TreeMap;