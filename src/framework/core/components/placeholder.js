import React from 'react';
import ContentLoader from 'react-content-loader'

class UIPlaceholder extends React.Component { 
  render() {
    const type = ('type' in this.props) ? this.props.type : null;
    const size = ('size' in this.props) ? this.props.size : null;
    var width =  ('width' in this.props) ? this.props.width : null;
    var height =  ('height' in this.props) ? this.props.height : null;
    var padding = ('padding' in this.props) ? this.props.padding : 0;

    if(type){
      switch(type){
        case "word":
          width = 20;
          height = 10;
          break;
      }
    }

    return (
      <ContentLoader
        height={height + 2*padding}
        width={width + 2*padding}
      >
        <rect x={padding} y={padding} rx="5" ry="5" width={width} height={height} /> 
      </ContentLoader>      
    );
  }
}


export default UIPlaceholder;