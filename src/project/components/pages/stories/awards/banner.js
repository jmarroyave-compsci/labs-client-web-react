import React from 'react'
import { styled } from '@mui/material/styles';
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';
import TextLink from "core/ui/text-link"
import BannerCarousel from './banner-carousel'
import withData from './data/with-data-stories-movie-awards'

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
              <Title>Awards</Title>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <Description>search and visualize the award's information from the Oscars, Golden Globes and Emmys</Description>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <BannerCarousel data={data}/>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <Footer>
              <TextLink border href="/stories/awards"> See more</TextLink>
            </Footer>
          </GridItem>
        </GridContainer>
      </div>
    )
}

export default Banner;


