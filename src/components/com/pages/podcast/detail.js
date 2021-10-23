import React from 'react'
import { styled } from '@mui/material/styles';
import Body from 'core/ui/layout/body';
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';
import Date from "core/ui/date";
import Pill from 'core/ui/pill'
import Media from 'com/media';
import Icon from '@material-ui/core/Icon';
import Title from "com/title";
import Stack from 'com/ui/stack';
import Categories from "com/categories";
import Text from 'com/text';
import { Frame } from 'style/boxes'
import { SubTitle } from 'style/detail'
import Field from 'com/field';
import References from 'com/references';

export default function Dashboard( props ){
  var { data, loading } = props;
  data = (data) ? data : {};

  return (
    <Stack>
      <Media src={data.image}/>

      <Categories data={data.category}/>
      <Title text={data.title} subText1={data.subtitle} subText2={data.author} link={data.link}/>

      <Text text={data.summary}/>

      <Frame>
        <SubTitle>general information</SubTitle>
        <Field title="Created" data={data.createdDate} format="date"/>
        <Field title="Language" data={data.language}/>
        <Field title="Country" data={data.country}/>
      </Frame>

      <References website={data.link} data={data}/>

    </Stack>
  )
}
