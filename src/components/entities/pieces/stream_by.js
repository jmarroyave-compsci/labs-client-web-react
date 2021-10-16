import React from 'react'
import { Frame } from 'components/styles/boxes'

function StreamBy( props ){
  const { data, loading, route } = props;

  if( !data || data === null || data.length == 0) return <div/>

  if( "name" in data ) return <div/>

  return (
    <Frame>
      {data.map( (item, key) => 
        <div key={key}>
            {item.name && <div>Name: {item.name}</div>}
            {item.yearAdded && <div>Year added: {item.yearAdded}</div>}
        </div>
      )}
    </Frame>
  )
}

export default StreamBy;
