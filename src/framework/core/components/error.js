
import React from 'react';

/*
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}

*/

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false, 
      errors : [],
    };
  }

  componentDidCatch(error, info) {
    var errors = this.state.errors;
    //console.debug(error);
    errors.push(error);
    this.setState({ hasError: true, errors: errors});

    if(window.__api)
      window.__api.setError(errors.toString());
  }

  render() {
    const ref = (this.props.from) ? this.props.from : "-";
    const errors = this.state.errors;
    var key = 0;
    if (this.state.hasError) {
      return  <div style={{color:'red', margin: '0px', padding:'0px', border: '1px solid red'}}>
                  <div style={{fontSize:'1.2em'}}><b>Error in components</b></div>
                  <div style={{fontSize:'0.9em'}}>Reference: {ref}</div>
                  <hr/>
                  {errors.map((e) =>
                    <div key={key++} style={{fontSize:'0.8em'}}>{e.toString()}</div>
                  )}
                  
              </div>;
    }
    return this.props.children;
  }
}


export default ErrorBoundary;