import React from 'react';
import styled, { css } from 'styled-components'
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

const ContainerTrendH1 = styled.h1`
  font-size: 1rem;
  line-height: 2.5rem;
  font-weight: bold;
  margin: 0;
  padding: 0.25rem;
  text-transform: uppercase;
`;

