import React from 'react'
import { styled } from '@mui/material/styles';
import Body from 'core/ui/layout/body';
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';
import Date from "core/ui/date";
import Pill from 'core/ui/pill'
import Media from 'components/entities/pieces/media';
import Icon from '@material-ui/core/Icon';
import Title from "components/entities/pieces/title";
import Stack from '@mui/material/Stack';
import Categories from "components/entities/pieces/categories";
import Text from 'components/entities/pieces/text';


const Section = styled('h4')({
  margin: '1rem 0 0.5rem 0',
  padding: 0,
});

const Summary = styled('div')({
  fontSize: '0.9rem',
  lineHeight: "1.5rem",
});

const Field = styled('div')({
  fontSize: '0.9rem',
  lineHeight: "1rem",
  marginBottom: '0.5rem',
});

export default function Dashboard( props ){
  var { data, loading } = props;
  data = (data) ? data : {};

    console.log(data)

  return (
    <Stack>
      <Media src={data.image}/>

      <Body>
        <Categories data={data.category}/>
        <Title text={data.title} subText1={data.subtitle} subText2={data.author} link={data.link}/>

        <Text text={data.summary}/>

        <Section>general information</Section>
        {data && data.createdDate && <Field>Created: <Date value={data.createdDate}/></Field>}
        {data && data.language && <Field>Language: {data.language}</Field>} 
        {data && data.country && <Field>Country: {data.country}</Field>}  
      </Body>
    </Stack>
  )
}
