import React from 'react'
import { styled } from '@mui/material/styles';

import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';
import Paper from 'core/ui/paper';
import Link from 'core/ui/link';
import Slider from "core/ui/slider";
import Date from "core/ui/date";
import Card from 'core/ui/cards/img-text';
import Icon from './topic_icon';
import List from './topic_list';
import sections from './sections';
import uris from './uris';


const Frame = styled('div')({
  padding: "0.5rem",
});

const Container = styled('div')({`
  width: '100%',
  backgroundColor: 'transparent',
  maxWidth: '400px',
  textAlign: 'left',
  display: 'inline-block',
`});

const TrendContainer = styled('div')({`
  padding: '0.5rem',
`});

const DateFooter = styled('div')({`
  fontSize: '0.8rem',
  lineHeight: '1rem',
  marginTop: '1.75rem',
  textAlign: 'center',
  color: '#666',
`});

class SoftwareTrendComponent extends React.Component {
  render() {
    var { data, links, display, defaultIcon } = this.props;
    display = (display > 0) ? display : 1;
    defaultIcon = (defaultIcon === false) ? false : true;
    var trend = (data) ? data.info : null;
    var topics = (data) ? data.topics : null;
    const { ini, end } = (trend) ? trend : {ini: '-', end: '-'} ;
    const api = window.__api;
    return (
        <Container>
          {this.renderSlider(topics, trend, links, display, defaultIcon)}
          {(ini !== '-') ? 
            <DateFooter>
              datos comprendidos entre <Date format={'DD/MM/YYYY'} value={ini}/> y <Date format={'DD/MM/YYYY'} value={end}/>.
            </DateFooter>
          :
            ""
          }
        </Container>
    );
  }

  renderSlider(data, trend, links, display, defaultIcon) {
    return (
      <Slider xs={display} sm={display} md={display} lg={display}>
          {sections.map((section, key)=>
            <div key={key}>
              <SectionTrends links={links} section={section} data={(data) ? data[section.key] : null} trend={trend} defaultIcon={defaultIcon}/>
            </div>
          )}
      </Slider>
    );
  }
}


function SectionTrends({section, subtitle, data, trend, links, defaultIcon}) {
    return (
      <TrendContainer>
        <Paper>       
            <List 
              defaultIcon={defaultIcon}
              title={section.title} 
              subtitle={<span>{section.subtitle} </span>} 
              id="text"
              border={false}
              colored={true}
              data={data} 
              trend={trend}
              max={5} 
              links={links}
              actions={[
                <Link border to={uris.getLinkToView(trend, section.slug)}>todos</Link>
              ]}
            />
        </Paper>
      </TrendContainer>
    );
}

export default SoftwareTrendComponent;