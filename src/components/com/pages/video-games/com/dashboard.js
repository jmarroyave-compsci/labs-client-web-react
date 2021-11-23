import React from 'react'
import _Dashboard from 'com/entities/movie/dashboard';

const Dashboard = ( props ) => {
  return <_Dashboard 
            {...props}    
            type="videoGame" 
            icon="sports_esports"
            title="video games"
          />
}

export default Dashboard;