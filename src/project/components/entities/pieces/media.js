import React from 'react'
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';
import Image from 'core/ui/image';
import Icon from '@material-ui/core/Icon';

function Media( props ){
  const { data, loading } = props;

  return (
    <GridContainer fill style={{width: '100%', backgroundColor: '#333'}}>
      <GridItem xs={12} sm={12} md={12}>
          <MainImage data={data}/>
      </GridItem>
    </GridContainer>

  )
}

function MainImage( { data } ){
  if ( !data || !data.image) return <Placeholder/>


  return (
    <Image src={data.image} width="150" height="150"/>
    )  
}

function Placeholder(){
    return (
        <div style={{width: '8rem', height: '8rem', display: 'flex', alignItems: "center", justifyContent: "center", backgroundColor: '#efefef'}}>
          <Icon>broken_image</Icon>
        </div>

      )  
}



export default Media;
