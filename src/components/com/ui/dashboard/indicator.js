import React from 'react';
import PropTypes from 'prop-types';
import DashboardCard from 'core/ui/cards/dashboard'
import Date from 'core/ui/date';
import Number from 'core/ui/number';
import Loading from 'core/ui/loading';
import { Small } from 'style/detail'

///import "./indicator.scss";

class Indicator extends React.Component {
  render() {
  	var { title, data, value, smaller, type, icon, loading, format, width, suffix=null } = this.props;
    data = ( data ) ? data : value;
    
    return (
      <DashboardCard width={width} icon={icon} title={title} 
        subtitle={
          <span>
            {this.renderType( loading, type, data, format )}
            {suffix && <Small> {suffix}</Small>}
          </span>
        }
      />
    );
  }

  renderType( loading, type, data, format ){
    if(loading === true) return <Loading/>

    switch(type){
      case "number":
        return <Number value={data} format={format}/>
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
  format: PropTypes.string,
  width: PropTypes.number,
};

Indicator.defaultProps = {
  title: "title",
  data: null,
  type: "number",
  smaller: false,
  format: "0.0a",
};


