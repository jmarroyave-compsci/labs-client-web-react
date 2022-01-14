import React from 'react'
import { Small, Item, Notes  } from 'style/component'
import { styled } from '@mui/material/styles';

function HistoryItem( { item, year } ){
    return (
      <React.Fragment>
        <div><Notes>{(year) ? `[${year}] ` : ""}{item.date}</Notes></div>
        <div><Small>{item.event}</Small></div>
      </React.Fragment>
    )

}

export default HistoryItem