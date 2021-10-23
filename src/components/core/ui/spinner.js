import React from 'react';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Button from 'core/ui/button';


class Spinner extends React.Component {
  render(){
    var { text, onChange } = this.props;

    return (
      <div style={{display: 'inline-block'}}>
        <div style={{display: 'flex', flexDirection: 'horizontal', width: '100%', textAlign: 'center'}}>
          <Button icon={'previous'} onClick={()=>onChange(-1)}/>
          <ContainerTrendH1>{text}</ContainerTrendH1>
          <Button icon={'next'} onClick={()=>onChange(1)}/>
        </div>                
      </div>
    )    
  }
}

export default Spinner;

const ContainerTrendH1 = styled('h1')({`
  fontSize: '1rem',
  lineHeight: '2.5rem',
  fontWeight: 'bold',
  margin: '0',
  padding: '0.25rem',
  textTransform: 'uppercase',
`});

