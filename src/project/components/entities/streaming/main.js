import React from 'react'
import PropTypes from 'prop-types';

import Hello from 'core/ui/dummies/hello';


export default function Main( props ) {
  const { loading, error, data } = props;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error { error.toString() }</p>;

  return (
    <Hello/>
  )
}


Main.propTypes = {
  data: PropTypes.object,
};

Main.defaultProps = {
  data: null,
};


