import React from 'react'
import { styled } from '@mui/material/styles';
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

const Frame = styled('div')({
  margin: "0rem 2rem 2rem 2rem"
});


const SubTitle = styled('h4')({
  marginTop: '1rem',
  marginBottom: '0rem',
});


function Dashboard( props ){
  var { data, loading } = props;
  data = (data) ? data : {};

  return (
    <Stack>
      <Media src={data.image}/>
      <Frame>
        <Professions data={data.profession}/>
        <Title text={data.name}/>

        <SubTitle>General information</SubTitle>
        {data && data.birthDate &&  <span>Age: <Date value={data.birthDate}/></span>}

        <Awards data={ (data) ? data.awards : null }/>
      </Frame>
    </Stack>
  )
}

export default Dashboard;