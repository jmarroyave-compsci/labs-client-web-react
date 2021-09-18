import React from 'react';
import PropTypes from 'prop-types';
import DashboardCard from 'core/ui/cards/dashboard'

import "./indicador.scss";

class Indicador extends React.Component {
  render() {
  	var { title, data, smaller, type, icon } = this.props;

    return (
      <DashboardCard icon={icon} title={title} subtitle={this.renderType( type, data )}>
      </DashboardCard>

    );
  }

  renderType( type, data ){
    switch(type){
      case "number":
        return data
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


