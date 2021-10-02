import React from 'react';
import { styled } from '@mui/material/styles';


const Frame = styled('div')({
  backgroundColor: 'red',
  color: 'white',
  border: '1px solid #A00',
  margin: '1rem',
  padding: '1rem',
});

const Title = styled('h3')({
  margin: 0
})

const Reference = styled('div')({
  fontSize: '0.75rem',
  textTransform: 'uppercase',
})

const Detail = styled('div')({
  fontSize: '0.75rem',
  fontFamily: 'monospace',
  backgroundColor: 'white',
  padding: '0.5rem',
  color: 'black',

})

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false, 
      errors : [],
    };
  }

  componentDidCatch(error, info) {
    this.state.errors.push(error);
    this.setState({ hasError: true, errors: this.state.errors});
    if(window.__api)
      window.__api.setError(errors.toString());
  }

  render() {
    const { errors, hasError } = this.state; 
    const { from, children } = this.props;
    const ref = (from) ? from : "-";

    return (
      (hasError) ? 
        <Frame>
            <Title>Error in components</Title>
            <Reference>{ref}</Reference>
            <hr/>
            <Detail>
            {errors.map((e, key) => 
              <div key={key++} style={{fontSize:'0.8em'}}>{e.toString()}</div>
            )}
            </Detail>          
        </Frame>
      :
        children
    )
  }
}


export default ErrorBoundary;