import React, { useEffect, useState } from 'react'

import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function TopicTimeline( props ){
  const { data, onExit, topic } = props;
  const [ topicTimeline, setTopicTimeline ] = useState( {} )
  const cellBG = ( i, active ) => (active) ? "rgba(0,0,0,0.4)" : ( ( i % 2 == 0) ? "rgba(0,0,0,0.1)" : "inherit") 

  useEffect( () => {
    if(!data.topic.data) return;

    var tl = {}
    var genres  = {};

    data.topic.data.forEach( t => {
      if(!tl[t.year]) tl[t.year] = {}
      if(!genres[t.genre]) genres[t.genre] = {}
    })  

    var resp = {}
    Object.keys(genres).forEach( k => resp[k] = {...tl})

    data.topic.data.forEach( t => {
      resp[t.genre][t.year] = 1
    })

    setTopicTimeline(resp)

  }, [data.topic.data] )


  return (
      <div>
        <Stack direction="row" style={{marginBottom: '1rem'}}>
          <Chip label={topic} onDelete={ onExit } />
          <div style={{flex: 1}}/>
        </Stack>

        <div style={{ fontSize: '0.6rem', width : '100%', maxHeight: "400px", overflow: 'auto'}}>
          <Table size="small" stickyHeader >
            <TableHead>
              <TableRow>
              <TableCell>&nbsp;</TableCell>
              { Object.keys(topicTimeline).slice(0,1).map( genre => 
                  Object.keys( topicTimeline[genre] ).map( year => 
                    <TableCell key={year} align='center'>{year}</TableCell>
                  )
              )}
              <TableCell>&nbsp;</TableCell>
              </TableRow>
            </TableHead>                
            <TableBody>
              { Object.keys(topicTimeline).map( (genre, idx) => 
                <TableRow key={idx} style={{ backgroundColor: cellBG( idx, false) }}>
                  <TableCell style={{ backgroundColor: cellBG( 0, (genre == props.genre)) }} >{genre}</TableCell>
                  {Object.keys( topicTimeline[genre] ).map( (year) => 
                    <TableCell style={{ backgroundColor: cellBG( 0, ( year == props.year || genre == props.genre)) }} align='center'>{(topicTimeline[genre][year] == 1) ? "✓" : " " }</TableCell>
                  )}
                  <TableCell style={{ backgroundColor: cellBG( 0, (genre == props.genre)) }} >{genre}</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
  )
}

export default TopicTimeline