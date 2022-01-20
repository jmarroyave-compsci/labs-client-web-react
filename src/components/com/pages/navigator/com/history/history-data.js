import React, { useEffect, useState } from 'react'
import Stack from 'com/ui/stack';
import HistoryItem from './history-item'

function HistoryData( { data, year, tagsSelected, onClick } ){
    const includesTag = ( { tags } ) => {
      if(!tagsSelected) return true;

      for(var tag of tags){
        if( tagsSelected[tag.type] && tagsSelected[tag.type].includes(tag.text) ) return true;
      }

      return false;
    }

    return (
      <React.Fragment>
          <div style={{ padding: "1rem 1.5rem 1rem 1rem" }}>
            {Object.keys(data).map( y =>
              ( y == year || tagsSelected != null ) && data[y].map( (item, idx) => 
                includesTag(item) && <HistoryItem onClick={onClick} year={(tagsSelected) ? y : null} key={idx} item={item}/>
              )
            )}
          </div>
      </React.Fragment>
    )

}

export default HistoryData