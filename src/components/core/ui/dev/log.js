import React from 'react';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { Hook, Console, Decode } from 'console-feed';

class Log extends React.Component{
	constructor(){
		super();
		this.state = {
			logs: [],
			expanded: false,
		}

		this.onClick = this.onClick.bind(this)
	}

	onClick(){
		this.setState({expanded: !this.state.expanded})
	}

	componentDidMount(){
		Hook(window.console, log => {
			this.setState(({logs}) => ({ logs: [...logs, Decode(log)]}))
		})
	}

	render(){
		return (
			<Container style={{'height': (this.state.expanded) ? '400px' : '40px'}}>
				<ButtonToggle onClick={this.onClick}>LOG</ButtonToggle>
				<Console logs={this.state.logs} variant='light'/>
			</Container>
		)
	}
};

Log.propTypes = {
};

Log.defaultProps = {
};


export default Log;

const Container = styled('div')({`
	backgroundColor: '#242424',
	overflowY: 'scroll',
	position: 'fixed',
	bottom: '0',
	width: '100%',
`});

const ButtonToggle = styled('div')({`
	zIndex: '100',
	backgroundColor: 'white',
	position: 'absolute',
	top: '0',
	right: '0.1rem',
	fontSize: '0.5rem',
	lineHeight: '0.75rem',
	padding: '0.2rem'
`});
