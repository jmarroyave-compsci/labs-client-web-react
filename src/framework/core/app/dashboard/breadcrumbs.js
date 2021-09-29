import React from 'react';
import _Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from 'core/ui/text-link';
import Typography from '@material-ui/core/Typography';

export default function Breadcrumbs( props ) {
  var { data, style } = props;
  data = (data) ? data : [];
  data = [{url : '/', name: 'home'}].concat(data);
  delete data[ data.length - 1 ].url;
  return (
    <_Breadcrumbs maxItems={4} aria-label="breadcrumb" style={style}>
      { data.map( (item, idx) => 
        item.url ? 
        <Link key={idx} underline="hover" color="inherit" href={item.url}>
          {item.name}
        </Link>
        : 
        <Typography key={idx} color="primary" aria-current="page" style={{padding: "0.5rem 0.75rem"}}>{item.name}</Typography>
      )}       
    </_Breadcrumbs>
  );
}