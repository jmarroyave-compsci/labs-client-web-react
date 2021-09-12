import React from 'react';
import PropTypes from 'prop-types';
import Number from  'core/ui/number';

import "./indicador.scss";

class Indicador extends React.Component {
  render() {
  	var { title, data, smaller, type } = this.props;

    return (
    	<div className="indicador">
        <div className="row title" style={{textAlign: 'left'}}>
          <div className="title">{title}</div>
        </div>
        <div className="row" >
          <div className={`content ${(smaller) ? "small" : ""}`}>
            <div>{this.renderType( type, data )}</div>
          </div>
        </div>
		</div>
    );
  }

  renderType( type, data ){
    switch(type){
      case "number":
        return <Number value={data}/>
      case "string":
        return data;
    }
  }
}

export default Indicador;

Indicador.propTypes = {
  title: PropTypes.string,
  type: PropTypes.oneOf(['number', 'string']),
  smaller: PropTypes.bool,
};

Indicador.defaultProps = {
  title: "title",
  data: null,
  type: "number",
  smaller: false,
};


