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
  marginBottom: '3rem',
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
  paddingRight: '1rem',
});

const ResultType = styled('div')({
  fontSize: '0.8rem',
  lineHeight: '0.8rem',
  textTransform: "uppercase",
  fontFamily: 'monospace',
});

const ResultText = styled('h3')({
  margin: 0,
  padding: 0,
  fontSize: '1.7rem',
  lineHeight: '2.3rem',
  whiteSpace: 'normal',
});

const ResultExtra = styled('div')({
  marginTop: 0,
  fontSize: '1rem',
  lineHeight: '1.3rem',
});

const Tag = styled("span")(({theme}) => ({
  fontWeight: 'bold',
  opacity: 0.7,
}))

function _Results(props){
  const start = useRef(null)
  const { data, loading, qry, params, showFilters=true, showLegend=true } = props;

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
      {showLegend && 
        <ResultsHeader>
          <div>search results for: <Query>{params.qry}</Query></div>    
        </ResultsHeader>
      }
      {showFilters &&
        <Parameters             
          onChange={onFiltersChanged}
          filters={ ( { onChange } ) => <Filters onChange={onChange} params={ params } /> }
        />
      }
      <div ref={start}/>
      <ResultsData>
        <Paging {...props} onPageChange={onPageChange} skeleton={<Skeleton/>}>
          <Stack
            spacing={4}
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
  var desc = (r.desc) ? r.desc.split(" ") : [];
  desc = (desc.length > 25) ? desc.slice(0,25).join(" ") + "..." : desc.join(" ")
  const highlight = ["plot:", "genre:", "released:"]
  desc = desc.split(new RegExp(`(${highlight.join("|")})`, 'g'));        

  return (
    <Result>
      <ResultType>{r.type.toUpperCase()} [{r.year ?? "?"}]</ResultType>
      <LinkEntity id={r.entityId} type={r.type} entity={r.entity}>
        <ResultText>{r.entity}</ResultText>
      </LinkEntity>
      {r.desc && <ResultExtra>
        { desc.map((part, i) => 
          highlight.includes(part) ? 
            <Tag key={i}>{part}</Tag>
          : 
            <span key={i}>{part}</span> 
          )        
        }
      </ResultExtra>}
    </Result>
  )
}

export default _Results;