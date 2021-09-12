import React from 'react';

class AppList extends React.Component {
	render(){
	 	return(
  		this.props.children
	    )
  	}
}

AppList.defaultProps = {
  type: 'AppList',
}

export default AppList;
