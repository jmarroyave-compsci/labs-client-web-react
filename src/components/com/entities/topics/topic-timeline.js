import React, { useEffect, useState, useMemo } from 'react'
import { styled } from '@mui/material/styles';

import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { Scrollbars } from 'react-custom-scrollbars';

import { useTable } from 'react-table'
import { useSticky } from 'react-table-sticky';

import { getDecades } from 'data/enums/years';
import { getGenres } from 'data/enums/genres';

function TopicTimeline( props ){
  const [columns, data] = useMemo( () => getData( props.data, props.loading ), [props.data] )
  const { onExit, topic, v3, onClick } = props;


  if(columns == null) return null;

  return (
      <div style={{width: '100%', display: "flex", flex: 1}}>
        <Stack direction="column" spacing={1} style={{width: '100%'}}>
          {!v3 &&
            <span>
              <Chip label={topic.replace(/,/g, " ")} onDelete={ onExit } />
            </span>
          }
          <Scrollbars autoHeight={!v3} style={{flex: 1}}>
            <div style={{ width: '100%', fontSize: '0.6rem', padding: '0 1rem 1rem 0'}}>
              <_Table columns={columns} data={data} onClick={ onClick }/>
            </div>
          </Scrollbars>
        </Stack>
      </div>
  )
}

const FreezeHeaderCell = styled(TableCell)( ( { theme, } ) => ({
  backgroundColor: theme.palette.background.paper,
  zIndex: "100!important",
}));

const HeaderCell = styled(TableCell)( ( { theme, } ) => ({
  writingMode: "vertical-lr",
  textAlign: 'center',
  padding: 0,
  fontSize: '0.8rem',
  lineHeight: '0.8rem',
  fontFamily: 'monospace',
}));

const FreezeCell = styled(TableCell)( ( { theme, } ) => ({
  backgroundColor: theme.palette.background.paper,
  zIndex: 90,
  padding: "0.2rem",
  paddingLeft: '1rem',
  fontSize: '0.75rem',
  lineHeight: '0.75rem',
}));

const Cell = styled(TableCell)( ( { theme, } ) => ({
  padding: 0,
  fontSize: '0.7rem',
  lineHeight: '0.7rem',
  borderRight: '1px dotted',
  borderColor: theme.palette.action.selected,
}));


function _Table({ columns, data, onClick }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  },
    useSticky,
  )

  const rowBG = ( i, active ) => {
    return (active) ? "rgba(0,0,0,0.4)" : ( ( i % 2 == 0) ? "rgba(0,0,0,0.1)" : "inherit") 
  }

  const cellBG = ( i, active ) => {
    if(col == 0) return "rgba(0,0,0)";

    return (active) ? "rgba(0,0,0,0.4)" : ( ( i % 2 == 0) ? "rgba(0,0,0,0.1)" : "inherit") 
  }

  return (
    <Table size="small" stickyHeader {...getTableProps()}>
      <TableHead>
        {headerGroups.map(headerGroup => (
          <TableRow {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column, cx) => (
              (cx == 0) ?
              <FreezeHeaderCell  {...column.getHeaderProps()} >{column.render('Header')}</FreezeHeaderCell>
              :
              <HeaderCell  {...column.getHeaderProps()} >{column.render('Header')}</HeaderCell> 
            ))}
          </TableRow>
        ))}
      </TableHead>
      <TableBody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <TableRow {...row.getRowProps()} style={{ backgroundColor: rowBG( i, false) }}>
              {row.cells.map( (cell, cx) => 
              (cx == 0) ?
              <FreezeCell  {...cell.getCellProps()} >{cell.render('Cell')}</FreezeCell>
              :
              <Cell align='center' {...cell.getCellProps()} onClick={ () => { if(onClick) onClick( {decade: cell.column.Header, genre: cell.row.values['genre']} )} } >{cell.render('Cell')}</Cell>
              )}
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}  

function getData(data, loading){
  if(!data || data.length == 0 || loading ) return [ null, null ];
   
  var resp = [], rec, columns = [];
  const decades = getDecades({ascending : true})
  const genres = getGenres({all : false})

  const appendColumn = (header, text, fixed=false) => columns.push( { Header: header, accessor: text, ...((fixed) ? {sticky: 'left'} : {}) } )

  appendColumn( "Genre", "genre", true )
  decades.forEach( (d, i) => {
    appendColumn( `${d}`, `_${d}`, false)
  })

  genres.forEach( g => {
    rec = { genre : g }
    decades.forEach( d => {
      const dd = data.find( drec => (drec.genre == g && drec.year == d))
      rec[`_${d}`] = (dd) ? "✓" : ""
    })

    resp.push(rec)
  })

  return [ columns, resp ]
}


export default TopicTimeline