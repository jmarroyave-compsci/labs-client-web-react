import React from 'react'
import { styled } from '@mui/material/styles';
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';
import Placeholder from 'core/ui/placeholder';
import Paper from 'core/ui/paper';
import Slider from 'core/ui/slider';
import List from 'core/ui/list';
import Link from 'core/ui/link';
import StarRatings from 'react-star-ratings';

const Container = styled('div')({`
  width: '100%',
  maxWidth: '400px',
  display: 'inline-block',
  textAlign: 'left',
`})

const PlaceholderContainer = styled('div')({`
  width: '100%',
  padding: '0.5rem',
`})

const PlaceholderPieceContainer = styled('div')({`
  paddingBottom: '0.3rem',
`})

const CourseContainer = styled('div')({`
    backgroundColor: 'white',
    padding: '1.5rem 1rem', 
    color: '#333!important',  
    width: '100%',
`})

const CourseHeadContainer = styled('div')({`
    color: '#888',
    height: '1rem',
    display: 'block',
    width: '100%',     
    overflow: 'hidden', 
`})

const CoursePlatformContainer = styled('div')({`
  display: 'block',
  float: 'left',
  fontSize: '0.6em',   
  lineHeight: '1rem',
  textTransform: 'uppercase',
`})

const CourseRatingContainer = styled('div')({`
  float: 'right',
  display: 'block',
  marginTop: '-0.75rem',
`})

const CourseNameContainer  = styled('div')({`
  fontSize: '1.1em',
  lineHeight: '1.5rem',
  padding: '0.25rem 0', 
`})

const CourseFromContainer  = styled('div')({`
  fontSize: '0.75em', 
  lineHeight: '1rem',
  textTransform: 'uppercase',
  textAlign: 'justify',
  color: '#666',
`})

const CourseCommentsContainer  = styled('div')({`
  fontSize: '0.8rem',
  lineHeight: '1.1rem',
  padding: '0.5rem 0.5rem',
  fontStyle: 'italic',
  textAlign: 'center',
  color: '#666',
`})


function Course({data}) {
  if(!data) return <RenderPlaceholder/>
  return (
      <CourseContainer>
        <CourseHeadContainer>
          <CoursePlatformContainer>{data.platform}</CoursePlatformContainer>
          <CourseRatingContainer><StarRatings rating={data.rating} starRatedColor="#222" numberOfStars={5} starDimension='8px' starSpacing="2px"/></CourseRatingContainer>
        </CourseHeadContainer>
        <div>
    		  <CourseNameContainer><Link external to={(data.link) ? data.link : '#'}>{data.name}</Link></CourseNameContainer>
          <CourseFromContainer>{data.from}</CourseFromContainer>
          {data.comments && <CourseCommentsContainer>&quot;{data.comments}&quot;</CourseCommentsContainer>}
        </div>
      </CourseContainer>
  );
}

function RenderPlaceholder({}){
    return (
      <PlaceholderContainer>
        <PlaceholderPieceContainer>
          <Placeholder data={[
            [["-", "100", "10"]],
          ]}/>
        </PlaceholderPieceContainer>
        <PlaceholderPieceContainer>
          <Placeholder data={[
            [["-", "100", "40"]],
          ]}/>
        </PlaceholderPieceContainer>
        <PlaceholderPieceContainer>
          <Placeholder data={[
            [["-", "100", "10"]],
          ]}/>
        </PlaceholderPieceContainer>
        <PlaceholderPieceContainer>
          <Placeholder data={[
            [["-", "100", "25"]],
          ]}/>
        </PlaceholderPieceContainer>
      </PlaceholderContainer>
    )
}


class LatestCourses extends React.Component {
  render() {
    var {data, max, dots, renderer, display} = this.props;
    display = (display > 0) ? display : 1;
    var key = 0;

    renderer = (renderer) ? renderer : "list";
    max = (max) ? max : 5;
    dots = (dots) ? dots : true;
  	data = ( data ) ? data.slice(0,max) : [null]

    return (
      <Container>
        {(renderer === "list") ? this.renderList(data) : this.renderSlider(dots, data, display)}
      </Container>
    );
  }

  renderList(data){
    return (
      <List 
          loading={(data[0] == null) ? true : false}
          maxItems={data.length}
          data={data} 
          primaryLambda={(item)=><Course data={item}/>} 
          avatarType={false}
      />      
    )
  }

  renderSlider(dots, data, display){
    var children = [];

    for(var i=0; i < data.length; i++)
      children.push(
          <div key={i}>
            <div style={{padding: "1rem"}}>
              <Paper>
                <Course data={data[i]}/>
              </Paper>
            </div>                
          </div>);

    return (
      <Slider dots={dots} xs={display} sm={display} md={display} lg={display}>
        {children.map((item)=>item)}
      </Slider>      
    )    
  }
}

export default LatestCourses;