import React from 'react'
import _Dashboard from 'com/entities/movie/dashboard';

const Dashboard = ( props ) => {
  return <_Dashboard 
            {...props}    
            type="tvShow" 
            icon="tv"
            title="tv shows"
          />
}

export default Dashboard;