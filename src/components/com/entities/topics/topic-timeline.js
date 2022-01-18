import React, { useEffect, useState, useMemo } from 'react'

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
  const [columns, data] = useMemo( () => getData(props.data), [props.data] )
  const { onExit, topic } = props;
  const v3 = (props.data?.records);

  if(columns == null) return null;

  return (
      <div style={{height: "100%", display: "flex"}}>
        {!v3 &&
          <Stack direction="row" style={{marginBottom: '1rem'}}>
            <Chip label={topic.replace(/,/g, " ")} onDelete={ onExit } />
          </Stack>
        }

        <Scrollbars >
          <div style={{ fontSize: '0.6rem', flex: 1}}>
            <_Table columns={columns} data={data} />
          </div>
        </Scrollbars>
      </div>
  )
}

function _Table({ columns, data }) {
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

  const cellBG = ( i, active ) => (active) ? "rgba(0,0,0,0.4)" : ( ( i % 2 == 0) ? "rgba(0,0,0,0.1)" : "inherit") 

  return (
    <Table size="small" stickyHeader {...getTableProps()}>
      <TableHead>
        {headerGroups.map(headerGroup => (
          <TableRow {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <TableCell {...column.getHeaderProps()}>{column.render('Header')}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableHead>
      <TableBody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <TableRow {...row.getRowProps()} style={{ backgroundColor: cellBG( i, false) }}>
              {row.cells.map( (cell, cx) => {
                return <TableCell {...cell.getCellProps()}><div style={{...((cx == 0) ? {zIndex: 99} : {})}}>{cell.render('Cell')}</div></TableCell>
              })}
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}  

function getData(data){
  if(!data || data.loading) return [ null, null];

  data = data.records ?? []
    
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