import React from 'react'
import _Dashboard from 'com/entities/movie/dashboard';

const Dashboard = ( props ) => {
  return <_Dashboard 
            {...props}    
            type="movie" 
            icon="local_movies"
            title="movies"
          />
}

export default Dashboard;