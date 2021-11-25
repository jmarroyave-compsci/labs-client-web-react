import React, { useState, useRef } from 'react'
import { styled } from '@mui/material/styles';
import Stack from 'com/ui/stack';
import Divider from '@mui/material/Divider';
import Paging from 'com/ui/paging';
import Skeleton from './skeleton';

import LinkEntity from 'com/entities/entity/link';
import Field from 'com/field'
import Pill from 'core/ui/pill';
import Button from '@mui/material/Button';
import Parameters from 'com/ui/parameters';
import Filters from './filters';

const Results = styled('div')({
  marginBottom: '4rem',
});

const ResultsHeader = styled('div')({
  paddingBottom: '1rem',
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
  margin: 0,
  padding: 0,
  fontSize: '1.5rem',
  lineHeight: '1.9rem',
});

const ResultExtra = styled('div')({
  marginTop: 0,
  fontSize: '0.85rem',
  lineHeight: '1rem',
});

function _Results(props){
  const start = useRef(null)
  const { data, loading, qry, params } = props;

  const onFiltersChanged = ( params ) => {
    start.current.scrollIntoView(false)
    props.onFiltersChanged( params )    
  }

  const onPageChange = (params) => {
    start.current.scrollIntoView(false)
    props.onPageChange(params)
  }

  return (
    <Results>
      <ResultsHeader>
        <div>search results for: <Query>{params.qry}</Query></div>    
      </ResultsHeader>
      <Parameters             
        onChange={onFiltersChanged}
        filters={ ( { onChange } ) => <Filters onChange={onChange} params={ params } /> }
      />
      <div ref={start}/>
      <ResultsData>
        <Paging {...props} onPageChange={onPageChange} skeleton={<Skeleton/>}>
          <Stack
            spacing={6}
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
  return (
    <Result>
      <ResultType>{r.type.toUpperCase()} [{r.year ?? "?"}]</ResultType>
      <LinkEntity id={r.entityId} type={r.type} entity={r.entity}>
        <ResultText>{r.entity}</ResultText>
      </LinkEntity>
      {r.desc && <ResultExtra>{r.desc}</ResultExtra>}
    </Result>
  )
}

export default _Results;