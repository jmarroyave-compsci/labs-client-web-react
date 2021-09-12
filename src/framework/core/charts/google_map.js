import React from 'react';
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types';
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';
import Placeholder from 'core/ui/placeholder';
import GoogleMapReact from 'google-map-react';

const TrendMarker = ({ text, key, found }) => <Marker key={key} style={{backgroundColor: (found) ? 'green' : 'red'}}>&nbsp;</Marker>;

class TopicMap extends React.Component {
  render(){    
    const { data, topic } = this.props;
    if(!data) return this.renderPlaceholder();
    return this.renderContent(data, topic)
  }

  renderContent(data, topic){ 	
    return this.renderTemplate(data, topic);
  }

  renderPlaceholder(){
    return <Placeholder data={[[["-", "80", "10"]]]}/>;;
  }

  renderTemplate(items, topic){
    return (
      <Container>
        <ContainerMap>
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS_KEY }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}       
            style={{width: '100%', height: '100%'}}>
            {items.map((item, idx) => 
              <TrendMarker found={(topic == "" || item.items.find((item)=>(item.name == topic))) ? true : false} key={idx} lat={item.loc[0]} lng={item.loc[1]} text={item.from}/>
            )}
          </GoogleMapReact>
        </ContainerMap>
      </Container>
    )
  }

  renderTrend(name, location){

  }
}


TopicMap.propTypes = {
  data: PropTypes.array,
  topic: PropTypes.string,
}

TopicMap.defaultProps = {
    center: {
      lat: 32.248922,
      lng: -28.567676
    },
    zoom: 1,
    topic: "",
}

export default TopicMap;

const Container = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
  text-align: left;
  position: relative;
`;

const ContainerMap = styled.div`
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: absolute;
`;

const Marker = styled.div`
  height: 0.5rem;
  line-height: 0.5rem;
  width: 0.5rem;
  border-radius: 0.5rem;
  display: block;
  border: 1px solid black;
`;


