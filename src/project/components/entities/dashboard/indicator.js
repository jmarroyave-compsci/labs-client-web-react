import React from 'react';
import PropTypes from 'prop-types';
import DashboardCard from 'core/ui/cards/dashboard'
import Date from 'core/ui/date';
import Number from 'core/ui/number';
import Loading from 'core/ui/loading';

import "./indicator.scss";

class Indicator extends React.Component {
  render() {
  	var { title, data, smaller, type, icon, loading } = this.props;

    return (
      <DashboardCard icon={icon} title={title} subtitle={this.renderType( loading, type, data )}/>
    );
  }

  renderType( loading, type, data ){
    if(loading === true) return <Loading/>

    switch(type){
      case "number":
        return <Number value={data} format={"0,0"}/>
      case "string":
        return data;
      case "date":
        return <Date value={data}/>;
    }
  }
}

export default Indicator;

Indicator.propTypes = {
  title: PropTypes.string,
  type: PropTypes.oneOf(['number', 'string', 'date']),
  smaller: PropTypes.bool,
};

Indicator.defaultProps = {
  title: "title",
  data: null,
  type: "number",
  smaller: false,
};


