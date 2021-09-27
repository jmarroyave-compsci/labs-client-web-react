import React from 'react'
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';
import LinkPerson from 'components/entities/person/link';
import LinkMovie from 'components/entities/movie/link';
import LinkPodcast from 'components/entities/podcast/link';

function Results(props){
  const { data, loading } = props;

  return (
    <GridContainer justifyContent='center' fill style={{width: '100%'}}>
      {data && data.map( (r, idx) => 
        <GridItem key={idx} xs={12} sm={12} md={12}>
          <SearchLink r={r}/>    
        </GridItem>
      )}
    </GridContainer>
  )
}

function SearchLink( props ){
  const { r } = props; 
  switch(r.type){
    case "movie":
      return <LinkMovie id={r.entityId} entity={r.entity}><h3>{r.entity}</h3></LinkMovie>
    case "person":
      return <LinkPerson id={r.entityId} entity={r.entity}><h3>{r.entity}</h3></LinkPerson>
    case "podcast":
      return <LinkPodcast id={r.entityId} entity={r.entity}><h3>{r.entity}</h3></LinkPodcast>
  }

  return `ERROR: type ${r.type}`;
}

export default Results;