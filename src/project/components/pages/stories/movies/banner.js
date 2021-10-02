import React from 'react'
import { styled } from '@mui/material/styles';
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';
import TextLink from "core/ui/text-link"


const Title = styled('div')({
  fontSize: '3rem',
  padding: '1rem 0 2rem 0',
});

const Description = styled('div')({
  fontSize: '1rem',
});


const Footer = styled('div')({
  paddingTop: '2rem',
});


const Banner = function( props ){
    const { data, loading } = props;

    return (
      <div style={{width: '100%'}}>
        <GridContainer justifyContent='center' fill style={{width: '100%'}}>
          <GridItem xs={12} sm={12} md={12}>
              <Title>Movies</Title>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <Description>a dashboard with information from over 8M movies, how they are segmented, awards and ratings</Description>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <Footer>
              <TextLink border href="/movies"> See more</TextLink>
            </Footer>
          </GridItem>
        </GridContainer>
      </div>
    )
}

export default Banner;