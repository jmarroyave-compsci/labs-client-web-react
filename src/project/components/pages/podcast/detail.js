import React from 'react'
import { styled } from '@mui/material/styles';
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';
import Date from "core/ui/date";
import Pill from 'core/ui/pill'
import Media from 'components/entities/pieces/media';
import Icon from '@material-ui/core/Icon';
import Title from "components/entities/pieces/title";
import Stack from '@mui/material/Stack';
import Categories from "components/entities/pieces/categories";

const SubTitle = styled('h4')({
  marginTop: '1rem',
  marginBottom: '0rem',
});

const Summary = styled('div')({
  fontSize: '1rem',
  lineHeight: "1.25rem",
});

const Author = styled('div')({
  fontSize: '0.8rem',
  lineHeight: "0.9rem",
});

const Frame = styled('div')({
  margin: "0rem 2rem 2rem 2rem"
});


export default function Dashboard( props ){
  var { data, loading } = props;
  data = (data) ? data : {};

  return (
    <Stack>
      <Media src={data.image}/>

      <Frame>
        <Categories data={data.category}/>
        <Title text={<div>{data.title} <a href={data.link}> <Icon>link</Icon></a></div>}/>
        {data && data.subtitle && <h3>{data.subtitle}</h3>}
        {data && data.author &&  <Author>by {data.author}</Author>}

        <br/>
        {data && data.description && <div>Description: {data.description}</div>}
        {data && data.summary && <Summary>{data.summary}</Summary>}

        <SubTitle>General information</SubTitle>
        {data && data.createdDate && <div>Created: <Date value={data.createdDate}/></div>}
        {data && data.language && <div>Language: {data.language}</div>}
        {data && data.country && <div>Country: {data.country}</div>}
      </Frame>
    </Stack>
  )
}
