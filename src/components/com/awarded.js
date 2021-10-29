import React, { useEffect } from 'react'
import { styled } from '@mui/material/styles';
import { Frame } from 'style/boxes'
import { Medium, Small } from 'style/detail'
import LinkEntity from 'com/entities/entity/link'

export const Group = styled('div')({
  padding: 0,
  margin: '0 0 0.5rem 0',
});


export default function Awarded( props ){
  var { data, loading, mini } = props;
  var result = setAwarded(data, mini);
  result = ( !mini ) ? <Frame>{result}</Frame> : result;
  return (
    <>
        { result }
    </>
  )
}


function setAwarded(data, mini){
  var cat = "";
  var groups = []
  var rendered = []
  var key = 0;
  for( var i = 0; i < data.length; i++){
    var a = data[i]
    if(cat !== a.category){
      if(groups.length > 0) rendered.push(<Group key={key++}>{(mini) ? groups.slice(0,2) : groups }</Group>)
      groups = []
      cat = a.category
      groups.push(<Small key={key++}>{cat.toUpperCase()}</Small>)
    }

    groups.push(<Medium key={key++}>{(!a.entity_id && !a.id) ? a.entity : 
      <LinkEntity type={(a.entity_type) ? a.entity_type : ((a.id.startsWith("nm") ? "person" : "movie") )} id={(a.entity_id) ? a.entity_id : a.id}>{a.entity}</LinkEntity>
    }</Medium>)
  }

  if(groups.length > 0) rendered.push(<Group key={key++}>{groups}</Group>)

  return (mini) ? rendered.slice(0,3) : rendered;    
}
