import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux'
import _Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from 'core/ui/link';
import Typography from '@material-ui/core/Typography';
import { isArray } from 'core/lib/data'

export default function Breadcrumbs( props ) {
  const appState = useSelector(( state ) => state.app )
  const { style } = props;
  const theme = useTheme();

  var data = appState.breadcrumbs;

  if( data && data == "/" ){
    data = []
  }

  if( data && !isArray(data) ){
    data = (data.startsWith("/")) ? data.substring(1) : data;
    data = data.split("/");
    data = data.map( (d, i) => {
      var url = data.slice(0, i + 1).map( durl => `/${durl}` ).join("");
      return { name: d, url: url }
    })
  }

  data = (data) ? data : [];

  data = data.map(d => { return {url: d.url, name: d.name.toLowerCase()}})

  data = [{url : '/', name: 'home'}].concat(data);
  delete data[ data.length - 1 ].url;
  return (
    
      <_Breadcrumbs maxItems={4} aria-label="breadcrumb" style={{...style, color: theme.palette.text.primary}}>
        { data.map( (item, idx) => 
          item.url ? 
          <Link box key={idx} href={item.url} style={{padding: "0.5rem 0.25rem"}}>
            {item.name}
          </Link>
          : 
          <Typography key={idx} color="secondary" aria-current="page" style={{padding: "0.5rem 0.25rem"}}>{item.name}</Typography>
        )}       
      </_Breadcrumbs>
  );
}