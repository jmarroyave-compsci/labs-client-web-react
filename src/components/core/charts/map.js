import React from 'react';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import mapData from './maps/world';
//import mapData from './maps/world-eckert3-highres';
//import mapData from './maps/world-robinson-highres';

// Load Highcharts modules
require('highcharts/modules/map')(Highcharts);

class Map extends React.Component {
  render(){    
    const { data } = this.props;
    if(!data) return this.renderPlaceholder();
    return this.renderContent(data)
  }

  renderContent(data){ 	
  	const items = []; 
  	for(var i=0; i < data.length; i++) {
  		items.push([data[i].toLowerCase(), 1]);
  	}
  	//console.log(data, items);
    return this.renderTemplate(items);
  }

  renderPlaceholder(){
    return <Placeholder data={[[["-", "80", "10"]]]}/>;;
  }

  renderTemplate(data){
	const mapOptions = {
	  title: {
	    text: this.props.title,
	  },
	  /*
	  colorAxis: {
	    min: 0,
	    stops: [[0.4, '#ffff00'], [0.65, '#bfff00'], [1, '	#40ff00']]
	  },
	  */
	  series: [
	    {
	      mapData: mapData,
	      name: "",
	      data: data,
	      showInLegend: false,
	    }
	  ]
	};

    return (
		<HighchartsReact
			options={mapOptions}
			constructorType={'mapChart'}
			highcharts={Highcharts}
		/>
    )
  }

}


Map.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string,
}

Map.defaultProps = {
    title: "",
}

export default Map;

const Container = styled('div')({`
  overflow: 'hidden',
  textAlign: 'left',
  position: 'relative',
`});

