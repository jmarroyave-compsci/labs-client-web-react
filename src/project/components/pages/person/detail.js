import React from 'react'
import { styled } from '@mui/material/styles';
import Body from 'core/ui/layout/body';
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';
import References from "components/entities/pieces/references";
import Awards from "components/entities/pieces/awards";
import Date from "core/ui/date";
import Pill from 'core/ui/pill'
import Media from 'components/entities/pieces/media';
import Stack from '@mui/material/Stack';
import Professions from "components/entities/pieces/professions";
import Title from "components/entities/pieces/title";


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


function Dashboard( props ){
  var { data, loading } = props;
  data = (data) ? data : {};

  return (
    <Stack>
      <Media src={data.image}/>
      <Body>
        <Professions data={data.profession}/>
        <Title text={data.name}/>

        <Section>General information</Section>
        {data && data.birthDate &&  <Field>Age: <Date value={data.birthDate}/></Field>}

        <Awards data={ (data) ? data.awards : null }/>
      </Body>
    </Stack>
  )
}

export default Dashboard;