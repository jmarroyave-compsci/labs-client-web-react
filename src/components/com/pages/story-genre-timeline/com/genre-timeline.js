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

  const onTopicClick = ( topic ) => {
    if(props.onTopicClick) props.onTopicClick(topic)
  }
 
  return (
      <div>
        <div style={{ fontSize: '0.6rem', width : '100%', maxHeight: "400px", overflow: 'auto'}}>
          <Table size="small" stickyHeader >
            <TableHead>
              <TableRow>
              { data.map( rec => 
                  <TableCell key={rec.year} align='center'>{rec.year}</TableCell>
              )}
              </TableRow>
            </TableHead>                
            <TableBody>
              { words.map( (i) => 
                <TableRow key={i}>
                { data.map( (rec, idx) => 
                    <TableCell onClick={() => onTopicClick(rec.words[i]?.p)} key={idx} style={{fontWeight: (topic === rec.words[i]?.p) ? "bold" : "inherit" ,...getGrey(theme, i)}} align='center'>{ ( rec.words[i] ) ?  rec.words[i].p.split(",").join(" ") : "-" }</TableCell>
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