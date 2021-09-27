import React from 'react'
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';
import Date from "core/ui/date";
import Pill from 'core/ui/pill'
import Media from 'components/entities/pieces/media';
import Icon from '@material-ui/core/Icon';

function Dashboard( props ){
  var { data, loading } = props;
  data = (data) ? data : {};

  return (
  <GridContainer justifyContent='center' fill style={{width: '100%'}}>
      <GridItem xs={12} sm={12} md={12}>
        <h1>{data.title}</h1>
        {data && data.subtitle && <h3>{data.subtitle}</h3>}
        {data && data.feedUrl  && <a href={data.feedUrl}> <Icon>link</Icon></a>}
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Media data={data}/>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <h4>General information</h4>
        {data && data.author &&  <div>Author: {data.author}</div>}
        {data && data.createdDate && <div>Created date: <Date value={data.createdDate}/></div>}
        {data && data.description && <div>Description: {data.description}</div>}
        {data && data.summary && <div>Summary: {data.summary}</div>}
        {data && data.link && <div>Link: {data.link}</div>}
        {data && data.language && <div>Language: {data.language}</div>}
        {data && data.category && <div>Category: {data.category}</div>}
        {data && data.subcategory && <div>Subcategory: {data.subcategory}</div>}
      </GridItem>
    </GridContainer>
  )
}

export default Dashboard;