import React from 'react';
import _Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from 'core/ui/text-link';
import Typography from '@material-ui/core/Typography';

export default function Breadcrumbs( props ) {
  var { data } = props;
  data = (data) ? data : [];
  data = [{url : '/', name: 'home'}].concat(data);
  delete data[ data.length - 1 ].url;
  return (
    <_Breadcrumbs maxItems={4} aria-label="breadcrumb">
      { data.map( (item, idx) => 
        item.url ? 
        <Link key={idx} underline="hover" color="inherit" href={item.url}>
          {item.name}
        </Link>
        : 
        <Typography key={idx} color="primary" aria-current="page">{item.name}</Typography>
      )}       
    </_Breadcrumbs>
  );
}