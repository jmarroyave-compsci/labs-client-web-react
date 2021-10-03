import React from 'react'
import { styled } from '@mui/material/styles';
import { useHistory } from 'react-router-dom'
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Paging from 'components/ui/paging';
import Skeleton from './skeleton';

import LinkPerson from 'components/entities/person/link';
import LinkMovie from 'components/entities/movie/link';
import LinkPodcast from 'components/entities/podcast/link';
import Pill from 'core/ui/pill';
import Button from '@mui/material/Button';


const Results = styled('div')({
  marginBottom: '4rem',
});

const ResultsHeader = styled('div')({
  paddingBottom: '3rem',
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

function _Results(props){
  const history = useHistory();
  const { data, loading, qry, route } = props;

  return (
    <Results>
      <ResultsHeader>
        <div>search results for: <Query>{qry}</Query></div>    
      </ResultsHeader>
      <ResultsData>
        <Paging {...props} url={`/search/${encodeURIComponent(qry)}`} skeleton={<Skeleton/>}>
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
  console.log(r)
  switch(r.type){
    case "movie":
      return (
        <Result>
          <ResultType>Movie</ResultType>
          <ResultText><LinkMovie id={r.entityId} entity={r.entity}>{r.entity}</LinkMovie></ResultText>
        </Result>
      )
    case "people":
    case "person":
      return (
        <Result>
          <ResultType>Person</ResultType>
          <ResultText><LinkPerson id={r.entityId} entity={r.entity}>{r.entity}</LinkPerson></ResultText>
        </Result>
      )
    case "podcast":
      return (
        <Result>
          <ResultType>Podcast</ResultType>
          <ResultText><LinkPodcast id={r.entityId} entity={r.entity}>{r.entity}</LinkPodcast></ResultText>
        </Result>
      )
  }

  return `ERROR: type ${r.type}`;
}

export default _Results;