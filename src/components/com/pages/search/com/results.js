import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Stack from 'com/ui/stack';
import Divider from '@mui/material/Divider';
import Paging from 'com/ui/paging';
import Skeleton from './skeleton';

import LinkTVShow from 'com/entities/tv-show/link';
import LinkVideoGame from 'com/entities/video-game/link';
import LinkPerson from 'com/entities/person/link';
import LinkMovie from 'com/entities/movie/link';
import LinkPodcast from 'com/entities/podcast/link';
import LinkFestival from 'com/entities/movie-festival/link';
import Pill from 'core/ui/pill';
import Button from '@mui/material/Button';
import Filters from './filters';

const Results = styled('div')({
  marginBottom: '4rem',
});

const ResultsHeader = styled('div')({
  paddingBottom: '1rem',
});

const FiltersBox = styled('div')({
  paddingBottom: '2rem',
});

const Query = styled('span')({
  fontWeight: 'bold',
});

const ResultsData = styled('div')({
});

const Result = styled('div')({
});

const ResultType = styled('div')({
  fontSize: '0.65rem',
  lineHeight: '1rem',
  textTransform: "uppercase",
});

const ResultText = styled('h3')({
  marginTop: 0,
});

const ResultExtra = styled('div')({
  marginTop: 0,
  fontSize: '0.85rem',
  lineHeight: '1rem',
});

function _Results(props){
  const { data, loading, qry, onPageChanged, params } = props;

  const onFiltersChanged = ( params ) => {
    props.onFiltersChanged( params )    
  }

  return (
    <Results>
      <ResultsHeader>
        <div>search results for: <Query>{params.qry}</Query></div>    
      </ResultsHeader>
      <FiltersBox>
        <Filters
          params={ params }
          onFiltersChanged={ onFiltersChanged }
        />
      </FiltersBox>
      <ResultsData>
        <Paging {...props} onPageChanged skeleton={<Skeleton/>}>
          <Stack
            divider={<Divider flexItem />}
            spacing={2}
          >
            {data && data.map( (r, idx) => 
              <SearchResults key={idx} r={r}/>    
            )}
          </Stack>
        </Paging>
      </ResultsData>
    </Results>
  )
}

function SearchResults( props ){
  const { r } = props; 

  switch(r.type){
    case "movie":
      return (
        <Result>
          <ResultType>Movie</ResultType>
          <ResultText><LinkMovie id={r.entityId} entity={r.entity}>{r.entity}</LinkMovie></ResultText>
          {r.desc && <ResultExtra>{r.desc}</ResultExtra>}
        </Result>
      )
    case "people":
    case "person":
      return (
        <Result>
          <ResultType>Person</ResultType>
          <ResultText><LinkPerson id={r.entityId} entity={r.entity}>{r.entity}</LinkPerson></ResultText>
          {r.desc && <ResultExtra>{r.desc}</ResultExtra>}
        </Result>
      )
    case "podcast":
    case "podcasts":
      return (
        <Result>
          <ResultType>Podcast</ResultType>
          <ResultText><LinkPodcast id={r.entityId} entity={r.entity}>{r.entity}</LinkPodcast></ResultText>
          {r.desc && <ResultExtra>{r.desc}</ResultExtra>}
        </Result>
      )
    case "video_game":
      return (
        <Result>
          <ResultType>Video Game</ResultType>
          <ResultText><LinkVideoGame id={r.entityId} entity={r.entity}>{r.entity}</LinkVideoGame></ResultText>
          {r.desc && <ResultExtra>{r.desc}</ResultExtra>}
        </Result>
      )
    case "tv_show":
      return (
        <Result>
          <ResultType>TV Show</ResultType>
          <ResultText><LinkTVShow id={r.entityId} entity={r.entity}>{r.entity}</LinkTVShow></ResultText>
          {r.desc && <ResultExtra>{r.desc}</ResultExtra>}
        </Result>
      )
    case "festival":
      return (
        <Result>
          <ResultType>Festival</ResultType>
          <ResultText><LinkFestival id={r.entityId} entity={r.entity}>{r.entity}</LinkFestival></ResultText>
          {r.desc && <ResultExtra>{r.desc}</ResultExtra>}
        </Result>
      )
  }

  return `ERROR: type ${r.type}`;
}

export default _Results;