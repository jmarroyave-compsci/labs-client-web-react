import React from 'react';
import PropTypes from 'prop-types';
import TreeMap from "../TreeMap";

export default function Countries( params ){
  const { loading, error, data, format } = params;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error { error.toString() }</p>;

  if (!data || data.length === 0) return "NO DATA";
  
  return <div>
    {(format === "text") && renderText( data )}
    {(format === "graph") && renderGraph( data )}
  </div>;
}

function renderText( data ){
  return <>
      <p> Movies by country</p>
      <div>
        <ul> 
        { Object.keys(data).map( (country, idxc ) => (
          <li key={idxc}> { country } : {data[country]} </li>
        ))}
        </ul>
      </div>
    </>
}

function renderGraph( data ){
  return <TreeMap data={data}/>
}

Countries.propTypes = {
  data: PropTypes.object,
  format: PropTypes.oneOf(['text', 'graph']),
};

Countries.defaultProps = {
  data: {},
  format: "text",
};


