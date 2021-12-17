import React, { useEffect, useState } from 'react'

import { styled, useTheme } from '@mui/material/styles';
import { getGrey } from 'style/colors'

import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function GenreTimeline( props ){
  const theme = useTheme();
  const { data, topic } = props;
  const words = [0,1,2,3,4,5,6,7,8,9]
  const [ timeline, setTimeline ] = useState( {} )

  const onTopicClick = ( topic ) => {
    if(props.onTopicClick) props.onTopicClick(topic)
  }
 
  useEffect( () => {
    if(!data) return;

    var tl = {}
    data.forEach( t => {
      if(!tl[t.year]) tl[t.year] = {}
    })  

    var resp = {}
    Object.keys(tl).forEach( k => resp[k] = {})

    data.forEach( t => {
      resp[t.year] = {words : t.words}
    })

    setTimeline(resp)

  }, [data] )

  return (
      <div>
        <div style={{ fontSize: '0.6rem', width : '100%', maxHeight: "400px", overflow: 'auto'}}>
          <Table size="small" stickyHeader >
            <TableHead>
              <TableRow>
              { Object.keys(timeline).map( year => 
                  <TableCell key={year} align='center'>{year}</TableCell>
              )}
              </TableRow>
            </TableHead>                
            <TableBody>
              { words.map( (i) => 
                <TableRow key={i}>
                { Object.keys(timeline).map( (year, idx) => 
                    <TableCell key={idx} onClick={() => onTopicClick(timeline[year].words[i]?.p)} key={idx} style={{fontWeight: (topic === timeline[year].words[i]?.p) ? "bold" : "inherit" ,...getGrey(theme, i)}} align='center'>{ ( timeline[year].words[i] ) ?  timeline[year].words[i].p.replaceAll(",", " ") : "-" }</TableCell>
                )}
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
  )
}

export default GenreTimeline