import React, { useMemo } from 'react'
import { styled } from '@mui/material/styles';
import { Frame, Item } from 'style/boxes'
import { SubTitle } from 'style/detail'

import Field from 'com/field';
import Typography from '@material-ui/core/Typography';
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';
import Value from 'core/ui/value';
import Link from 'core/ui/link';

import AwardLink from 'com/entities/award/link';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

const FrameMini = styled('div')({
  marginTop: "0rem",
  minHeight: "3rem",
});

const ItemMini = styled('div')({
  width: '100%',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  fontSize: "0.8rem",
  lineHeight: "1rem",

});

const More = styled('span')({
  fontSize: "0.75rem",
  lineHeight: "0.85rem",
  padding: 0,
  paddingTop: '0.5rem',
  float: 'right',
});


const Year = styled('div')({
  fontSize: '1.30rem',
  lineHeight: '1.4rem',
});

const Prize = styled('div')({
  textTransform: "uppercase",
  margin: '0.5rem 0 0.5rem 0',
  padding: '0',
  fontSize: '0.9rem',
  lineHeight: '1rem',
});

const Category = styled('div')( {
  paddingLeft: "1rem",
});


const LinkToPage = ( { year, children} ) => {
  return <Link href={`/movies/stories/awards?year=${year}`}>{children}</Link>
}

export default function Awards( props ){
  var { data } = props;
  var sortedData = [], nData = {};

  if(!data || data.length == 0 ) return <div/>;

  useMemo( () => {
    sortedData = data.slice(0);
    sortedData = sortedData.sort( (a,b) => {
      if(a.year != b.year) return ( a.year < b.year ) ? 1 : -1;

      if(a?.festival?.name != b?.festival?.name) return ( a?.festival?.name < b?.festival?.name ) ? -1 : 1;
      return ( a.category < b.category ) ? -1 : 1;
    })

    sortedData.forEach( rec => {
      const festival = rec.festival?.name ?? "festival name";
      if(!nData[rec.year]) nData[rec.year] = {};
      if(!nData[rec.year][festival]) nData[rec.year][festival] = { id: rec.festival.id };
      if(!nData[rec.year][festival][rec.category]) nData[rec.year][festival][rec.category] = { won: rec.won };
    })
  }, [data])

  return (props.mini === true) ? AwardsMini(props, sortedData) : AwardsFull(props, nData); 
}

function AwardsMini( props, data ){
  var { year, all } = props;
  var MAX = (all) ? data.length : 2;

  year = parseInt(year)

  const showThis = ( item ) => {
    if (!year) return true;
    return (item.year == year)
  } 

  return (
    <FrameMini>
      {data && data.length > 0 && data.slice(0,MAX).map( (item, idx) => 
        showThis(item) && 
          <div key={idx} >
            <LinkToPage year={item.year}>
              <ItemMini>{item.year} - {(item.festival?.name ?? "festival name").toUpperCase()} - {((item.won === "false" || item.won === false) ? "[N]" : "[W]")} {item.category}</ItemMini>
            </LinkToPage>
          </div>        
      )}
      { !all && data && data.length > MAX && 
        <ItemMini>            
          <ItemMini><More>and {data.length - MAX} more</More></ItemMini>
        </ItemMini>
      }
    </FrameMini>     
  )
}

function AwardsFull( props, data ){
  var currentYear = null, currentPrize = null;

  return (
    <Frame>
      <SubTitle>awards</SubTitle>

      <Timeline>
      {data && Object.keys(data).reverse().map( ( year , idx) => 
          <TimelineItem key={year}>
            <TimelineOppositeContent style={{flex: 0}} color="text.secondary">
              <LinkToPage year={year}><Year>{year}</Year></LinkToPage>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              { (idx + 1 < Object.keys(data).length ) && <TimelineConnector />}
            </TimelineSeparator>            
            <TimelineContent>
              {Object.keys(data[year]).map( ( festival ) => 
                <div key={data[year][festival].id}>
                  <AwardLink entity="movies" year={year} id={data[year][festival].id} >                  
                    <Prize>{festival}</Prize>
                  </AwardLink>
                  {Object.keys(data[year][festival]).filter( f => f !== "id").map( (category) => 
                    <Category key={category}>
                      <Field title={ (data[year][festival][category].won === false) ? "nominee" : "winner"} value={category}/>
                    </Category>                    
                  )}
                </div>
              )}
            </TimelineContent>
          </TimelineItem>
      )}
      </Timeline>
    </Frame>     
  )
}