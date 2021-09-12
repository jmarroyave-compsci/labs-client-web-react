import React from 'react';
import PropTypes from 'prop-types';

export default function Movies( params ){
  const { loading, error, data, format } = params;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error { error.toString() }</p>;

  if (!data || data.length === 0) return "NO DATA";
  
  return <div>
    {data}
  </div>;
}

Movies.propTypes = {
  data: PropTypes.object,
};

Movies.defaultProps = {
  data: {},
};


