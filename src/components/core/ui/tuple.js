import React from 'react';
import UIComponent from 'core/ui/ui_component';
import { withStyles } from "@mui/styles";
import UIDate from 'core/ui/date';
import UINumber from 'core/ui/number';
import UIDuration from 'core/ui/duration';
import Slider from 'react-slick';

const styles = theme => ({
	title : {
		fontWeight: 'bold',
	},
  item: {
    height: 25,
    padding: 2,
    margin: 5,
    border: '1px solid #A0A0A0',
  },
  data_container : {
    display: 'table',
    height: '100%',
    width: '100%',
  },
  data : {
    display: 'table-cell',
    textAlign: 'center',
    verticalAlign: 'middle',
    marginLeft: 3,
  },
});

class SampleNextArrow extends React.Component {
  render(){
    const {className, style, onClick} = this.props
    return (
      <div
        className={className}
        style={{display: 'block', background: '#f0f0f0', borderRadius: 5}}
        onClick={onClick}
      ></div>
    );
  } 
}


class SamplePrevArrow extends React.Component {
  render(){
    const {className, style, onClick} = this.props
    return (
      <div
        className={className}
        style={{display: 'block', background: '#f0f0f0', borderRadius: 5}}
        onClick={onClick}
      ></div>
    );
  } 
}

class UITuple extends UIComponent { 
  render() {
    var value, title;
    if(this.props.tuple){
      value = (this.props.tuple.value && this.props.tuple.value !== '') ? this.props.tuple.value : null;
      title = this.props.tuple.title;
    } else {
      value = (this.props.data) ? this.props.data : null;
      title = this.props.title;      
    }

  	if(value === null || value === '') return "";

  	const css = (this.props.className) ? this.props.className : '';

    if(Array.isArray(value)){
      if(value.length === 1){
        value = value[0];
      }
    }

    if(Array.isArray(value)){
      return this.renderValues(title, value, css);
    } else {
      return this.renderValue(title, value, css);
    }   
  }

  renderValue(title, value, css){
    const classes = this.props.classes;
    return (
      <span className={css}>
        {title !== "" && 
          <span className={classes.title}>{title}:</span>
        }
        <span className={classes.data}>{this.formatValue(value)}</span>
      </span>
    );
  }

  renderValues(title, values, css){
    const classes = this.props.classes;
    var settings = {
      dots: false,
      infinite: false,
      slidesToScroll: 1,
      variableWidth: true,
      responsive: [ { breakpoint: 100, settings: { slidesToShow: 1 } }],
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,      
    };
    var key = 0;
    return (
      <span className={css}>
        <span className={classes.title}>{title}:</span>
        <Slider {...settings}>
          {values.map(value =>
            <div key={key++} className={classes.item}><div className={classes.data_container}><span className={classes.data}><a href={`./#/?q=${encodeURIComponent(value)}`}>{this.formatValue(value)}</a></span></div></div>
          )}
        </Slider>      
      </span>
    );
  }

  formatValue(value){
    if(this.props.format){
      switch(this.props.format){
        case "date":
          value = <UIDate value={value}/>;
          break;
        case "number":
          value = <UINumber value={value}/>;
          break;
        case "duration":
          value = <UIDuration value={value}/>;
          break;
      }
    }

    if(this.props.link){
      value = <a href={this.props.link}>{value}</a>;
    }

    return value;
  }
}


export default withStyles(styles)(UITuple);