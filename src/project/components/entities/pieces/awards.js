import React from 'react'
import { styled } from '@mui/material/styles';
import Typography from '@material-ui/core/Typography';
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';
import Value from 'core/ui/value';

const Frame = styled('div')({
});

const Item = styled('div')({
});

const FrameMini = styled('div')({
  marginTop: "-1.5rem",
  minHeight: "3rem",
});

const ItemMini = styled('div')({
  width: '100%',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
});


const More = styled('span')({
  fontSize: "0.75rem",
  lineHeight: "0.85rem",
  padding: 0,
  paddingTop: '0.5rem',
  float: 'right',
});


const Year = styled('h3')({
  margin: '0 0 0.5rem 0',
  padding: '0',
});

const Prize = styled('h4')({
  textTransform: "uppercase",
  margin: '0 0 0.5rem 0',
  padding: '0',
});

const Category = styled('div')( {
});


const Nominee = styled('div')({
  fontSize: '0.75rem',
  lineHeight: '0.85rem',
  textTransform: 'uppercase',
});

export default function Awards( props ){
  var { data } = props;
  if(!data) return null;

  /*
  var dato = data.sort( (a, b) => {
    if( a.year !== b.year )
      return (a.year > b.year) ? -1 : 1 

    if( a.name !== b.name )
      return (a.name > b.name) ? 1 : -1 

    return (a.category > b.category) ? 1 : -1 
  });
  */

  return (props.mini === true) ? AwardsMini(props, data) : AwardsFull(props, data); 
}


function AwardsMini( props, data ){
  var MAX = 1;
  return (
    <FrameMini>
      {data && data.length > 0 && data.slice(0,MAX).map( (item, idx) => 
        <div key={idx} >
          <ItemMini>            
            <ItemMini>{item.year} - {item.name.toUpperCase()} - {((item.won === false) ? "[NOM]" : "")} {item.category}</ItemMini>
          </ItemMini>
        </div>
      )}
      { data && data.length > MAX && 
        <ItemMini>            
          <ItemMini><More>and {data.length - MAX} more</More></ItemMini>
        </ItemMini>
      }
    </FrameMini>     
  )
}

function AwardsFull( props, data ){
  var currentYear = null, currentPrize = null;

  /*
  data = data.sort( (a, b) => {
    if( a.year !== b.year )
      return (a.year > b.year) ? -1 : 1 

    if( a.name !== b.name )
      return (a.name > b.name) ? 1 : -1 

    return (a.category > b.category) ? 1 : -1 
  });
  */



  const RenderYear = (item) => {
    if (!currentYear || currentYear != item.year){
      currentYear = item.year;
      currentPrize = null;
      return <Year>{item.year}</Year>
    }
    return null;
  }

  const RenderPrize = (item) => {
    if (!currentPrize || currentPrize != item.name){
      currentPrize = item.name;
      return <Prize>{item.name}</Prize>
    }
    return null;
  }


  return (
    <Frame>
      <h2>Awards</h2>
      {data && data.length > 0 && data.map( (item, idx) => 
        <div key={idx} >
          {RenderYear(item)}
          {RenderPrize(item)}
          <Item>
            {((item.won === false) ? <Nominee>nominee</Nominee> : "")}
            <Category won={item.won}>{item.category}</Category>
          </Item>
        </div>
      )}
    </Frame>     
  )
}