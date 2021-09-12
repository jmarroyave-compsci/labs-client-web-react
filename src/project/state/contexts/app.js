import React from "react";
import { connect } from 'react-redux';
import Theme from 'config/theme';

export const AppContext = React.createContext({
  theme : {},
});

const { Provider, Consumer } = AppContext;
class AProvider extends React.Component{
	render(){
		var {children, auth} = this.props;
		return (
			<Provider value={{ theme: Theme}}>
				{children}
			</Provider>
		);
	}
}

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = dispatch => ({
});

export const AppProvider = connect(mapStateToProps, mapDispatchToProps)(AProvider);