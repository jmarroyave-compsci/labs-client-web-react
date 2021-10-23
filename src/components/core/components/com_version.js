import React from 'react';
import withModule from 'core/components/with-module';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './com_version.scss';

class Component extends React.Component {
	constructor(props){
		super(props);

		const com = window.__api.getComponentsVersion();

		this.state = {
			option: com.id,
		};

		this.handleChange = this.handleChange.bind(this);
		this.onClose = this.onClose.bind(this);
	}

	handleChange(event){
		const value = event.target.value;
		this.setState({ option : value });
		window.__api.setComponentsVersion(value);
	}

	onClose(){
		if(this.props.onClose != null){
			this.props.onClose();
		}
	}

	render(){	
		var { visible, versions } = this.props; 
		if(!visible){
			return null;
		}

		const data = versions;
		return (
			<div className='mod-version'>
	  			<FormControl>
	    			<InputLabel htmlFor="native-simple">UXUI Version</InputLabel>
					<Select native value={this.state.option} onChange={this.handleChange} input={<Input id="native-simple" />}>
						{data.map((item) =>
							item.visible && <option key={item.id} value={item.id}>{item.family} {`${item.version[0]}.${item.version[1]}.${item.version[2]}`}</option>
						)}
					</Select>
	        	</FormControl>
        	</div>
		)
	}

}

export default withModule(Component);