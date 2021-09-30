import React from 'react'
import { styled } from '@mui/material/styles';
import { useHistory } from 'react-router-dom'
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/divider';

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

const ResultText = styled('h3')({
  marginTop: 0,
});

const ResultType = styled('div')({
  fontSize: '0.65rem',
  lineHeight: '1rem',
  textTransform: "uppercase",
});


function _Results(props){
  const history = useHistory();
  const { data, loading, qry, route } = props;
  const page = (route.page) ? parseInt(route.page) : 1;

  const goToPage = ( toPage ) => {
    history.push(`/search/${encodeURIComponent(qry)}/${toPage}`)
    window.scrollTo(0,0);
  }
  const nextPage = () => goToPage(page + 1)
  const nextButton = ( data && data.length < 10 )
  const previousPage = () => goToPage(page - 1)
  const previousButton = (page == 1)

  return (
    <Results>
      <ResultsHeader>
        <div>search results for: <Query>{qry}</Query></div>    
      </ResultsHeader>

      <ResultsData>
      { (data && data.length > 0) ? 
        <Stack
            divider={<Divider flexItem />}
            spacing={2}
        >
          {data && data.map( (r, idx) => 
            <SearchResults key={idx} r={r}/>    
          )}
          <Stack direction='row' spacing={2} justifyContent='center'>
            <Button variant="outlined" disabled={previousButton} onClick={ previousPage }>Back</Button>
            <Button variant="outlined" disabled={nextButton} onClick={ nextPage }>Next</Button>
          </Stack>
        </Stack>
      :
        <ResultText>No results</ResultText>
      }
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