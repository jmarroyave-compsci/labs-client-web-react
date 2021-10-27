import React from 'react';
import Error from 'core/ui/error'; 

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
  }

  render() {
    const { errors, hasError } = this.state; 
    const { children } = this.props;
    const from = (this.props.from) ? this.props.from : "-";

    return (
      (hasError) ? 
        <Error from={from} data={errors.map( e => e.toString() ).join("\n")}/>
      :
        (children) ? children : <div/>
    )
  }
}


export default ErrorBoundary;